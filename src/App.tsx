import { useState } from 'react'
import './App.css'

function App() {
  const [lives, setLives] = useState(5);
  const hiddenWord = 'apple'.split('');

  return (
    <>
      <h1>Hangman</h1>
      <h2>Lives {lives}/5</h2>
      <div className="guessed">
        A____
      </div>
      <input id="letter" type="text" placeholder="Enter a letter" />
      <div className="card">
        <button onClick={() => {
          const input = document.getElementById('letter') as HTMLInputElement;
          if (hiddenWord.includes(input.value.toLowerCase())) {
            console.log('guessed');
          } else {
            console.log('not guessed, you lose 1 life');
            setLives((lives) => lives - 1)
          }
          input.value = '';
        }}>
          Confirm
        </button>
      </div>
    </>
  )
}

export default App
