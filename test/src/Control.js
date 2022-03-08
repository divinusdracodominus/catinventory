import React from 'react';
import ReactDOM from 'react-dom';
let catagory_list = ["Adapters", "Speakers", "Monitors", "Misc"];
let locations = ["FAB8201", "FAB8202", "FAB8204", "FAB8809", "FAB8810"];
function FormInput(props) {
  const options = catagory_list.map(item => <option>{item}</option>); 
  const local_list = locations.map(element => <option>{element}</option>); 
  const title = props.title == null ? "Missing title" : props.title;
  const desc = props.description == null ? null : <tr><td><label for="desc">description</label></td><td><textarea name="desc" id="desc"></textarea></td></tr>;
  const borrower = props.incborrow == null ? null : <tr><td><label for="borrower"></label></td><td><input type="text" name="borrower"/></td></tr>
  return (
    <div className={props.className} id={props.id} ref={props.ref}>
      <form method="post" action={props.action}>
      <h2>{title}</h2>
      <table>
        <tr>
	  <td><label for="name">name</label></td>
	  <td><input type="text" name="name" id="name"/></td>
	</tr>
	<tr>
          <td><label for="catagory">catagory</label></td>
	  <td>
	  <input list="catagories" name="catagory" id="catagory"/>
          <datalist id="catagories">{options}</datalist>
	  </td>
	</tr>
	<tr>
	  <td>
          <label for="location">location</label>
	  </td>
          <td>
            <input list="locations" name="location" id="location"/>
	    <datalist id="locations">{local_list}</datalist>
	  </td>
	</tr>
	<tr>
          <td><label for="depart">department</label></td>
	  <td>
	    <input list="depart" name="department" id="department"/>
            <datalist id="depart">
              <option>
                Computer Action Team (CAT)
	      </option>
	      <option>
                Computer Science (CS)
	      </option>
	      <option>
                Computer Engineering (CE/ECE)
	      </option>
	      <option>
                Civil and Environmental Engineering (CEE)
	      </option>
	      <option>
                Electrical Engineering (EE)
	      </option>
	      <option>
                Engineering technology management (ETM)
	      </option>
	      <option>
                Mechanical Engineering (ME)
	      </option>
	    </datalist>
	  </td>
	</tr>
	<tr>
          <td><label for="purchase_date">purchase date</label></td>
	  <td>
	    <input type="date" name="purchase_date" id="purchase_date"/>
	  </td>
	</tr>
	<tr>
          <td><label for="quantity">quantity</label></td>
	  <td><input type="number" name="quantity" id="quantity"/></td>
	</tr>
	<tr>
          <td><label for="mincount">minimum quantity</label></td>
	  <td><input type="number" id="mincount" name="mincount"/></td>
	</tr>
	{borrower}
      </table>
      <input type="submit"/>
      </form>
    </div>
  );
}

export default FormInput;
