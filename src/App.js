import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  // array destructuring
  const [bruttopalkka, setBruttopalkka] = useState(0);
  const [veroprosentti, setVeroprosentti] = useState(0);
  const [veromäärä, setVeromäärä] = useState(0);
  useEffect(()=>{
    let vero = bruttopalkka*veroprosentti/100;
    setVeromäärä(vero);
  },[bruttopalkka, veroprosentti]);

  const palkkaMuuttunut=(event) => {
    setBruttopalkka(event.target.value);
  }
  const veroprosMuuttunut=(event) => {
    setVeroprosentti(event.target.value);
  }

  // JSX
  return (
    <div>
    {/*  <button onClick={nappiaPainettu}>Laske veron määrä</button>*/}
      <input onChange={(event)=>palkkaMuuttunut(event)} value={bruttopalkka}></input> eur <br></br>
      <input onChange={(event)=>veroprosMuuttunut(event)} value={veroprosentti}></input> %
      <p>Veromäärä: <b>{veromäärä}</b></p>
    </div>
  );
}

export default App;
