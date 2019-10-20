import React from 'react';
import './stylesheets/App.css';

import Timer from './containers/Timer.js'

function App() {
  return (
    <div className="App">
      <Timer/>
      <footer>
        <h2>Made by <a target="_blank" href="http://mohammedchisti.com" rel="noopener noreferrer">Mohammed Chisti</a>. Inspired by <a target="_blank" href="http://timer.taqtile.io/" rel="noopener noreferrer">Taqtile Timer</a>.</h2>
      </footer>
    </div>
  );
}

export default App;
