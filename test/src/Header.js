import set_focus from './scripts.js';
import './Header.css';
import React from 'react';
import ReactDOM from "react-dom";
import SimpleResult from './SimpleResult';
let catagories = ["All", "Adapters", "Network Cards", "Graphics Cards", "Misc", "Power Adapters"];

var history = [];

function Header(props) {
  const cat = React.useRef(null);
  // this is only a planned feature, not implemented yet 
  /*componentDidMount() {
    super.componentDidMount();
    this.backListener = browserHistory.listen(local => {
      if(local.action === "POP") {
        let last = history.pop();
	redirect(last);
      }
    });
  }*/ 
  function nav_search() {
    var matches = [];
    let select = document.getElementById('search_method');
    let searchby = select.options[select.selectedIndex].value;
    console.log("simple searching by: " + searchby);
    let term = document.getElementById("search_term").value;
    fetch("/testload.php").then(response => { console.log(response); return response.json()}).then(data => {
        data.forEach(d => {
          // I should use some fuzzy searching
          if(searchby == "id" && d.id == term){matches.push(d);}
	  else if(searchby == "name" && d.name == term) { matches.push(d); }
	  else if(d.location == term) { matches.push(d); }
	});
	console.log("matches: " + JSON.stringify(matches));
	set_focus("resview");
        ReactDOM.render(<SimpleResult elements={matches}/>, document.getElementById("resview"));
    });
  } 
  const elems = catagories.map(val => (
    <option id={val}>{val}</option> 
  ));
  console.log("session variable: " + sessionStorage.getItem("active"));
  function set_home(refs) {
    set_focus("homeview");
  }
  function set_guide(refs) {
    set_focus("guide");
  }
  function set_search(refs) {
    set_focus("advsearch"); 
  } 
  
  return (
      <div className="header">
	<div id="navbtns">
	  <img src="./cat_logo.png" id="catlogo"/>
          <button className="navbtn" onClick={set_search}>Advanced Search</button>
	  <button className="navbtn" onClick={set_guide}>User Guide</button> 
	  <button className="navbtn" onClick={set_home}>Home</button>
	</div>
	<h1>Computer Action Team Inventory</h1>
	<div id="search_area">
        
	  <select id="search_method" name="search_method" className="">
            <option value="id">id</option>
	    <option value="name">name</option>
    To borrow something find the item you would like to borrow, then 
	    <option value="location">location</option>
	  </select> 
	  <input type="text" id="search_term" name="search_term"/>
	  <button type="button" onClick={nav_search}>
	    <img src="./search.png" width="20px" height="20px"/>
	  </button>
	
	</div>
      </div>
    );
  
}

export default Header;
