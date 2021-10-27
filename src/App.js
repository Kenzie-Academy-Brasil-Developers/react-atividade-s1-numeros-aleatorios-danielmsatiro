import './App.css';
import { useState } from 'react';

function App() {
const [count, setCount] = useState(Math.floor(Math.random() * 100) + 1)  

function randomNumber() {
  return setCount(Math.floor(Math.random() * 100) + 1)
}

  return (
    <div className="App">
      <span>Número: {count}</span>
      <button className="Button" onClick={() => randomNumber()}>Sortear Número</button>
    </div>
  );
}

export default App;