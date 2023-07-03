import { useState, FormEvent, ChangeEvent } from "react";
import styles from "./App.module.scss";
import { Alert } from "./alerts/Alert";

function App() {
  const hiddenWord = "apple".split("");
  const [letter, setLetter] = useState("");
  const [lives, setLives] = useState(5);
  const [guessed, setGuessed] = useState(
    new Array(hiddenWord.length).fill("_").join("")
  );
  const [success, setSuccess] = useState(false);

  const guess = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (hiddenWord.includes(letter)) {
      const guessedArray = guessed.split("");
      hiddenWord.forEach((char, index) => {
        if (char === letter) {
          guessedArray[index] = letter;
        }
        setGuessed(guessedArray.join(""));
      });
      if (guessedArray.join("") === hiddenWord.join("")) {
        setSuccess(true);
      }
    } else {
      setLives((lives) => lives - 1);
    }
    setLetter("");
  };

  const onLetterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLetter(event.target.value);
  };

  return (
    <div className="container">
      <h1>Hangman</h1>
      <h2>Lives {lives}/5</h2>
      <div className="guessed">{guessed}</div>
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
      {success && (
        <Alert type="success" message="Congrats! You've guessed it!" />
      )}
      {lives === 0 && <Alert type="danger" message="Game over!" />}
    </div>
  );
}

export default App;
