// while I didn't get to it
// this is responsible for providing more 
// information on individual items
import React from 'react';
import ReactDOM from 'react-dom';

class Entry extends React.Component {
    id = null;
    catagory = null;
    name = null;
    local = null;
    description = null;
    department = null;
    mincount = null;
    borrower = null;
    imgurl = null;
    
    constructor(props) {
      
    }
    render() {
      return (
        <div>
        
	<table>
          <tr>
            <td>id</td>
	    <td>{this.id}</td>
	  </tr>
	  <tr>
            <td>location</td>
	    <td>{this.local}</td>
	  </tr>
	  <tr>
            <td>Department</td>
	    <td>{this.department}</td>
	  </tr>
        </table> 
          
        </div>
      );
    }
}
