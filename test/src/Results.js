import React from 'react';
import ReactDOM from 'react-dom';

function Results(props) {
  if(props.elements == null) {
    return (
      <h4>No Results found for your query</h4>
    );
  }
  //var prototype = {
  //  "name":null,
  //  "items":[],
  //};
  var items;
  props.elements.forEach(elem => {
    const found = items.find(e => e.name == elem.name);
    if(found != null) {
      found.items.push(elem);
    }else{
      const name = elem.name;
      var arr = [];
      arr.push(elem);
      items.push({"name":name, "items": arr});
    }
  });
  
}
