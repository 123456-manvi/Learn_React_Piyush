import React, { useEffect, useState} from 'react';

//import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComp';

import Timer from './Timer';

function App() {

  // const [isVisible, setVisible]=useState(true);
  // useEffect(() =>{
  //   console.log('App Comp. is  Mounting..');
  // }, []);

  return <div className="App">
     {/* {isVisible ? <MyComponent /> : <></>}
      <button onClick={() =>setVisible(!isVisible)}>Toggle</button> */}

      <Timer />
      </div>;

}

export default App;
