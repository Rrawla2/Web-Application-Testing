import React, { useState } from 'react';
import Display from "./components/Display";
import Dashboard from "./components/Dashboard"
import './App.css';

function App() {

  // balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
  // balls and strikes reset to 0 when a `hit` is recorded.
  // a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
  // a hit should make all reset to 0

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hit, setHit] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Baseball Tracker</h1>
      <Display />
      <Dashboard />
      </header>
    </div>
  );
}

export default App;
