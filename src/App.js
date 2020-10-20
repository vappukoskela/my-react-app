import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  // array destructuring
  const [bruttopalkka, setBruttopalkka] = useState(0);
  const [veroprosentti, setVeroprosentti] = useState(0);
  const [veromäärä, setVeromäärä] = useState();
  // const [teksti, setTeksti] = useState("");


  // poista nappula -> laskee automaattisesti kun palkkaa muutetaan
  const nappiaPainettu=() => {
    let vero = bruttopalkka*veroprosentti/100;
    setVeromäärä(vero);
  }
  const palkkaMuuttunut=(event) => {
    setBruttopalkka(event.target.value);
  }
  const veroprosMuuttunut=(event) => {
    setVeroprosentti(event.target.value);
  }

  // JSX
  return (
    <div>
      <button onClick={nappiaPainettu}>Laske veron määrä</button>
      <input onChange={(event)=>palkkaMuuttunut(event)} value={bruttopalkka}></input>
      <input onChange={(event)=>veroprosMuuttunut(event)} value={veroprosentti}></input>
      <p>{veromäärä}</p>
    </div>
  );
}

export default App;
