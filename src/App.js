import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  // array destructuring
  const [bruttopalkka, setBruttopalkka] = useState(0);
  const [veroprosentti, setVeroprosentti] = useState(0);
  const [veromäärä, setVeromäärä] = useState(0);
  // const [teksti, setTeksti] = useState("");


  // poista nappula -> laskee automaattisesti kun palkkaa muutetaan
/*  const nappiaPainettu=() => {
    let vero = bruttopalkka*veroprosentti/100;
    setVeromäärä(vero);
  }
*/  
  const palkkaMuuttunut=(event) => {
    setBruttopalkka(event.target.value);
    console.log(bruttopalkka);
    console.log(event.target.value);

    let vero = event.target.value*veroprosentti/100;
    setVeromäärä(vero);
  }
  const veroprosMuuttunut=(event) => {
    setVeroprosentti(event.target.value);
    console.log(veroprosentti);

    let vero = bruttopalkka*event.target.value/100;
    setVeromäärä(vero);

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
