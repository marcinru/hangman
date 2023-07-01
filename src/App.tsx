import { useState, FormEvent, ChangeEvent } from 'react'
import styles from './App.module.scss'

function App() {
  const hiddenWord = 'apple'.split('')
  const [letter, setLetter] = useState('')
  const [lives, setLives] = useState(5)
  const [guessed, setGuessed] = useState(new Array(hiddenWord.length).fill('_').join(''))

  const guess = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (hiddenWord.includes(letter)) {
      const guessedArray = guessed.split('')
      hiddenWord.forEach((char, index) => {
        if (char === letter) {
          guessedArray[index] = letter
        }
        setGuessed(guessedArray.join(''))
      })
    } else {
      setLives((lives) => lives - 1)
    }
    setLetter('')
  }

  const onLetterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLetter(event.target.value)
  }

  return (
    <>
      <h1>Hangman</h1>
      <h2>Lives {lives}/5</h2>
      <div className="guessed">{guessed}</div>
      <form className={styles.form} onSubmit={guess}>
        <div className="input-group mb-3">
          <input className="form-control" value={letter} onChange={onLetterChange} placeholder="Enter a letter" autoComplete="off" />
          <button type="submit" className="btn btn-outline-secondary">
            Confirm
          </button>
        </div>
      </form>
    </>
  )
}

export default App
