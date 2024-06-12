import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
const [counter, setCounter] =useState(15) 

function addvalue() {
  setCounter(counter +1);
  console.log(counter);
}
function  removeValue(){

  setCounter(counter -1);
  console.log(counter);
}
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Counter values</h2>
          <div><span>{counter}</span></div>
          <h4><button onClick={addvalue}>add</button><button onClick={removeValue}>remove</button></h4>
        </div>
      </header>
    </div>
  );
}

export default App;
