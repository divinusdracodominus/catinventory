// responsible for the guide page, and will be responsible
// for the how to contain and about sections when adde
import React from 'react';
import ReactDOM from 'react-dom';

function Guide(props) {
  return (
    <div id={props.id} className={props.className} ref={props.ref}>
      <h1>How to use the Site</h1>
      <h3>Basic Structure</h3>
      <p>
        This site is broken up into three primary locations, denoted by the navigation buttons on the top banner. Further more the site also posses a general search field for all available tabs, and displays primary content and search results in the main view directly below the header.
      </p>
      <h3>How to submit a basic search query</h3>
      <p>
        To submit a basic search query, start by selecting the type of search being performed in the selection next to the primary text field in the header, then input a simple search term followed by clicking the magnifying glass to the left of the search bar in the header in order to submit the basic search request
      </p>
      <h3>How to add items to the inventory</h3>
      <p>To add items to the inventory, click the home button, then select add item, this will show an input field that takes input required to add items to the Computer Action Team (CAT) Inventory, Please note that for the time being, this is not the CATs primary inventory, and is not how we would like people to request anything from us.</p>
      <h3>
        Features to implement
      </h3>
      <ul>
	<li>Advanced Search Functionality</li>
	<li>Post request to add items to inventory</li>
      </ul>
      <h3>Currently Implemented Features</h3>
      <ul>
	<li>Post request to add items to inventory</li>
	<p>The server side code is implemented, the form input is implemented, there is just a bit of glue needed to make it visible/interactable that is not implemented</p>
	<li>Primary Navigation</li>
	<li>Basic Search Functionality</li>
	<li>Showing full inventory</li>
	<li>Background Image Switcher</li>
        <li>Header Design</li>
	<li>Search Result Layout</li>
	<li>Data Entry layout</li>
	<li>Advanced search layout</li>
	<li>Basic user guide</li>
      </ul> 
      <h3>Optional future features</h3>
      <ul>
        <li>Query CAS/LDAP to authenticate users</li>
	<li>Allow anyone in MCECS to checkout items that will be marked as borrowable</li>
	<li>Run a background daemon server side to automatically produce tickets</li>
      <li>Room navigation map</li> 
      </ul>
    </div>
  );
}

export default Guide;
