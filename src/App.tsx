import { useState, FormEvent, ChangeEvent } from "react";
import { Alert } from "./alerts/Alert";
import { getRandomWord } from "./data/secret";

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
    setLetter(event.target.value.toUpperCase());
  };

  const startNewGame = () => {
    setLives(5);
    setHiddenWord(getRandomWord());
    setGuessed(new Array(hiddenWord.length).fill("_").join(""));
  };

  return (
    <div className="container mx-auto w-1/2 p-5 font-serif">
      <header className="text-5xl border-b border-neutral-500 py-7 mb-8">
        <h1>Hangman</h1>
      </header>
      <div className="bg-white rounded-lg px-6 py-3">
        <h2>Lives {lives}/5</h2>
      </div>
      <div className="font-mono tracking-widest">{guessed}</div>
      <form className="" onSubmit={guess}>
        <input
            autoComplete="off"
            autoFocus
            className="my-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            onChange={onLetterChange}
            placeholder="Enter a letter"
            type="text"
            value={letter}
        />
        <button
            className="uppercase inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            data-rounded="rounded-md"
            data-primary="blue-600"
            data-primary-reset="{}"
            type="submit"
        >
          Confirm
        </button>
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
