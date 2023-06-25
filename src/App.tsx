import { useState } from 'react'
import './App.css'

function App() {
  const hiddenWord = 'apple'.split('');
  const [lives, setLives] = useState(5);
  const [guessed, setGuessed] = useState(new Array(hiddenWord.length).fill('_').join(''));

  const guess = () => {
    const input = document.getElementById('letter') as HTMLInputElement;
    const letter = input.value.toLowerCase();
    if (hiddenWord.includes(letter)) {
      const guessedArray = guessed.split('');
      hiddenWord.forEach((char, index) => {
        if (char === letter) {
          guessedArray[index] = letter;
        }
        setGuessed(guessedArray.join(''));
      })
    } else {
      setLives((lives) => lives - 1)
    }
    input.value = '';
  }

  return (
    <>
      <h1>Hangman</h1>
      <h2>Lives {lives}/5</h2>
      <div className="guessed">{guessed}</div>
      <input id="letter" type="text" placeholder="Enter a letter" />
      <div className="card">
        <button onClick={guess}>
          Confirm
        </button>
      </div>
    </>
  )
}

export default App
