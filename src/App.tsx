import zero from './zero.png';
import shrek from './shrek.png';
import './App.css';

function App() {
  const subAudio = new Audio('sub-and-non-sub.wav')
  const shrekAudio = new Audio('shrek-collab.mp3')

  const handleClick = (title: string) => {
    switch (title) {
      case 'shrek':
        return shrekAudio.play()
      case 'sub':
        return subAudio.play()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div  onClick={() => handleClick('sub')} >
          <img src={zero} alt="logo" className='App-logo' />
        </div>
        <div onClick={() => handleClick('shrek')} >
          <img src={shrek} alt="logo" className='App-logo' />
        </div>
      </header>
    </div>
  );
}

export default App;
