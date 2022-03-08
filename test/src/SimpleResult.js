import './index.css';
function SimpleResult(props) {
  if(props.elements == null) {
    return (
      <p>No results found that match your search query</p>
    );
  }
  function display(id) {
    if(id == null) { console.log("id is null in display"); } 
  }
  var results = [];
  results.push(
    <tr><th>id</th><th>name</th><th>catagory</th><th>location</th><th>department</th><th>purchase date</th><th>quantity</th><th>minimum quantity</th></tr>
  );
  console.log("simple result elements: " + JSON.stringify(props.elements));
  props.elements.forEach(elem => { results.push(
    <tr className="result_entry">
      <td>{elem.id}</td>
      <td>{elem.name}</td>
      <td>{elem.catagory}</td>
      <td>{elem.location}</td>
      <td>{elem.department}</td>
      <td>{elem.purchase_date}</td>
      <td>{elem.quantity}</td>
      <td>{elem.minquantity}</td>
    </tr>
    );
  });
  return (
    <div id={props.id} className={props.className} ref={props.ref}>
      <div className="simprestab">
      <table>
        {results}
      </table>
      </div>
    </div>
  );
}
export default SimpleResult;
