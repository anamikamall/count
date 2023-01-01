import React, { useState } from 'react';
import './App.css';
import IncDcr from './IncDcr';

// hooks in this project
//useState is the hook

const App = () => {
    const state=useState();   //use state returns an array of two elements first is undefined and second is function
// console.log(state);
//initial data = current data + updated data (here 0 is initial data)
const [count, setCount] = useState(0);  //array destructuruing  (storing undefined in count and storing the function in setCount)
//first 0 will be the value of count later updated value of setCount will become the value of count

// let count=1;
const IncNum = () => {
    setCount(count + 1);
    // console.log("clicked " + count++);  //this will change the value in console but not on the the webpage
};

// events part
//these lines must be in the functional component not inside any other function
const purple = '#8e44ad';
const [bg, setBg] = useState(purple);
const [name, setName] = useState("Click Me");

const bgChange = () => {
// console.log("clicked");
let newBg = '#34495e';
setBg(newBg);
setName("Ouch!! 😱");
};

const bgBack = () => {
  setBg(purple);
  setName("Ayyo!! 😠");
}

  return(
    <>
    <div className="container" style={{backgroundColor: bg}}>
    <h1 style={{backgroundColor: bg}}> {count} </h1>
    <button onClick={IncNum}>Increment</button>
    <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
    {/* <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button> */}
    <IncDcr />
    </div>
    </>
  );
};

export default App;
