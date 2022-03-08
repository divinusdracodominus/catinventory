import ReactDOM from 'react-dom';
// one potential implementation
/*function set_focus(refs, setto) {
  console.log("about to switch to: " + setto);
  let btns = document.getElementsByClassName("navbtn");
  [].forEach.call(btns, element => {
    element.style.backgroundColor = "rgb(21,71,52)";
  });
  let node = refs.find(e => e.name == setto);
  if(node == null) {
     throw "unable to find ref matching: " + setto; 
  }
  refs.forEach(elem => { elem.value.current.style.display = "none"; });
  node.active = true;
  node.value.current.style.display = "block";    
}*/

function set_focus(setto) {
  console.log("about to set to: " + setto);
  let btns = document.getElementsByClassName("navbtn");
  [].forEach.call(btns, element => {
    element.style.backgroundColor = "rgb(21,71,52)";
  });
  [].forEach.call(document.getElementsByClassName("maincontent"), item => {
    item.style.display = "none"; 
  });
  document.getElementById(setto).style.display = "block";
}

export default set_focus;
