import { useState, FormEvent, ChangeEvent } from 'react'

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
      <form onSubmit={guess}>
        <input value={letter} onChange={onLetterChange} placeholder="Enter a letter" autoComplete="off" />
        <button type="submit">
          Confirm
        </button>
      </form>
    </>
  )
}

export default App
