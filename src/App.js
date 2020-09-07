import React, { useState } from 'react';
import './App.css'

const App = () => {

  const [move, setMove] = useState(false);
  const [counter, setCounter] = useState(0);



  return (
    <>
    <div className="counter-container">
<div className={move && "up"}>
      <div className="card card_1">
  <h1>{counter}</h1>
      </div>
      <div className="card card_2">
  <h1>{counter + 1}</h1>
      </div>
      </div>
    </div>
    <div className={move ? "disabled btn" : "btn"} onClick={add}>increase</div>
    <div className="btn" onClick={sub}>Decrease</div>
    <div className="btn" onClick={() => setCounter(0)}>Reset</div>
    </>
  )

  function add(e) {
    e.preventDefault();
    console.log('click');
    setMove(true);

    setTimeout(() => {
      setMove(false);
      setCounter(counter => counter + 1);
    }, 900)
  }


function sub(e) {
  e.preventDefault();
  if(counter === 0) {
    return alert(`counter Value ${counter}`)
  }
  setCounter(counter => counter - 1);
 }
}
export default App;