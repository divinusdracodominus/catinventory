import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import FormInput from './Control';
import AccountInput from './CreateAccount';

function HomeMenu(props) {
  function add_item() {}
  function login() {}
  function create_account() {}
  return (
    <div id={props.id} className={props.className} ref={props.ref}>
      <div id="homebtns">
        <button id="add_item" className="homebtn" onClick={add_item}>Add Item</button>
        <button id="login" className="homebtn" onClick={login}>Login/Logout</button>
        <button id="create_account" className="homebtn" onClick={create_account}>
	  Create Account
        </button> 
      </div>
      <div id="home_content">
        <FormInput title="Add Item"/>	
	<AccountInput/>
	
      </div>
    </div> 
  );
}

export default HomeMenu;
