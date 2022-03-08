import logo from './logo.svg';
import './index.css';
import { useRef, useEffect } from 'react';
import Header from './Header';
import FormInput from './Control';
import SimpleResult from './SimpleResult';
import UserGuide from './Guide';
import HomeMenu from './Home';

var images = ["spring.jpg", "island.jpg", "fall.jpg", "forest.jpg", "darkforest.jpg", "galaxy.jpg", "mountain.jpg", "ocean.png", "castle.jpg", "ruins.jpg", "bamboo.jpeg"];
const elements = [{"name":"test_element","id":"1"}];

function App() {
  const appRef = useRef();
  const homeRef = useRef();
  const advsearch = useRef();
  const guideRef = useRef();
  const resRef = useRef();

  var refs = [
    {"name":"homeref", "value":homeRef, "active":true},
    {"name":"advsearch", "value":advsearch, "active":false},
    {"name":"guideref", "value":guideRef, "active":false},
    {"name":"resref","value":resRef, "active":false}
  ];
  function set_background_image() {
    console.log("about to set background image");
    let random = Math.floor(Math.random() * images.length);
    console.log("random number is: " + random);
    console.log("image url is: " + images[random]);
    document.body.style.backgroundImage="url(./images/" + images[random] + ")";
  }
  useEffect(() => {
    set_background_image();
    setInterval(() => {
        set_background_image();
    }, 120000);
  });
  return (
    <div className="App" id="mainapp" ref={appRef}>
      <Header refs={refs}/>
      <div id="mainview">
        <FormInput id="advsearch" className="maincontent" title="Advanced Search" ref={advsearch} action="/additem.php"/>
        <SimpleResult className="maincontent" elements={elements}/>
	<UserGuide id="guide" className="maincontent"/>
        <HomeMenu id="homeview" className="maincontent"/>
	<div id="resview" className="maincontent"/>
      </div>
    </div>
  );
}

export default App;
