// this file contains the main home layout
// in the home tab, and implements functionality 
// for that respective tab
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import FormInput from './Control';
import AccountInput from './CreateAccount';
import SimpleResult from './SimpleResult';


// main react function
function HomeMenu(props) {
  function add_item() {}
  function login() {}
  function create_account() {}
  function dumptable() {
    fetch("/testload.php").then(response => response.json()).then(data => {
      //let result = <SimpleResult elements={data}/>;
      ReactDOM.render(<SimpleResult elements={data}/>, document.getElementById('home_content'));
    });
  }
  
  return (
    <div id={props.id} className={props.className} ref={props.ref}>
      <div id="homebtns">
        <button id="add_item" className="homebtn" onClick={add_item}>Add Item</button>
        <button id="login" className="homebtn" onClick={login}>Login/Logout</button>
        <button id="create_account" className="homebtn" onClick={create_account}>
	  Create Account
        </button>
	<button id="dumptable" className="homebtn" onClick={dumptable}>
         Show full inventory
	</button>
      </div>
      <div id="home_content">
        <FormInput title="Add Item" className="maincontent"/>	
	<AccountInput className="maincontent"/>
	
      </div>
    </div> 
  );
}

export default HomeMenu;
