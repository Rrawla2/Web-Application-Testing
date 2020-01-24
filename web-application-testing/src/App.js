import React, { useState } from 'react';
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hit, setHit] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Baseball Tracker</h1>

      <Display />
      
      </header>
    </div>
  );
}

export default App;
