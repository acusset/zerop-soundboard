import React from 'react';
import zero from './zero.png';
import './App.css';

function App() {
  const audio = new Audio('sub-and-non-sub.wav')

  const handleClick = () => {
    console.log('clic')
    audio.play()
  }

  return (
    <div className="App">
      <header onClick={handleClick} className="App-header">
        <img src={zero} alt="logo" className='App-logo' />
      </header>
    </div>
  );
}

export default App;
