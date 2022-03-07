import './Header.css';
import React from 'react';
import ReactDOM from "react-dom";
let catagories = ["Adapters", "Network Cards", "Graphics Cards", "Misc", "Power Adapters"];

function Header() {
  const cat = React.useRef(null);
  //React.useEffect(() => { console.log("loading"); load(); });
  //componentDidMount = () => { this.node = ReactDOM.findDOMNode(this); this.load(); }
  //function componentDidMount() {
  //  load();
  //}
  function load(){
    console.log("load called");
    var selector = cat;//this.node.querySelector("#catagories"); 
    //var selector = document.getElementById("catagories");
    if(selector == null) { console.log("unexpected error selector is null"); }
    catagories.forEach(item => {
       let option = document.createElement("option");
       option.innerText = item;
       selector.appendChild(option); 
    }); 
  }
  function nav_search() {

  } 
  const elems = catagories.map(val => (
    <option id={val}>{val}</option> 
  ));
  return (
      <div className="header">
        <form method="get">
	  <select name="search_method">
            <option value="id">id</option>
	    <option value="name">name</option>
	    <option value="location">location</option>
	  </select>
          <select name="catagories" id="catagories" ref={cat} onLoad={load}>
	  {elems} 
	  </select>
	  <input type="text" name="search_term"/>
	  <input type="submit" onSubmit={nav_search}/>
	</form>
      </div>
    );
  
}

export default Header;
