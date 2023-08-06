import { useState, FormEvent, ChangeEvent } from "react";
import { Alert } from "./alerts/Alert";
import { getRandomWord } from "./data/secret";

import styles from "./App.module.scss";

function App() {
  const [hiddenWord, setHiddenWord] = useState(getRandomWord());
  const [letter, setLetter] = useState("");
  const [lives, setLives] = useState(5);
  const [guessed, setGuessed] = useState(
    new Array(hiddenWord.length).fill("_").join("")
  );
  const win = guessed === hiddenWord;
  const lost = lives === 0;

  const guess = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (hiddenWord.includes(letter)) {
      const guessedArray = guessed.split("");
      hiddenWord.split("").forEach((char, index) => {
        if (char === letter) {
          guessedArray[index] = letter;
        }
        setGuessed(guessedArray.join(""));
      });
    } else {
      setLives((lives) => lives - 1);
    }
    setLetter("");
  };

  const onLetterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLetter(event.target.value.toLowerCase());
  };

  const startNewGame = () => {
    setLives(5);
    setHiddenWord(getRandomWord());
    setGuessed(new Array(hiddenWord.length).fill("_").join(""));
  };

  return (
    <div className="container">
      <h1>Hangman</h1>
      <h2>Lives {lives}/5</h2>
      <div className={styles.guessed}>{guessed}</div>
      <form className={styles.form} onSubmit={guess}>
        <div className="input-group mb-3">
          <input
            autoComplete="off"
            autoFocus
            className="form-control"
            onChange={onLetterChange}
            placeholder="Enter a letter"
            value={letter}
          />
          <button type="submit" className="btn btn-outline-secondary">
            Confirm
          </button>
        </div>
      </form>
      {win && <Alert type="success" message="Congrats! You've guessed it!" />}
      {lost && <Alert type="danger" message="Game over!" />}
      {(win || lost) && (
        <button className="btn btn-primary btn-lg" onClick={startNewGame}>
          New game?
        </button>
      )}
    </div>
  );
}

export default App;
