import {ChangeEvent, FormEvent, useRef, useState} from "react";
import {Alert} from "./alerts/Alert";
import {getRandomWord} from "./data/secret";
import Button from "./buttons/Button";
import LifeBar from "./bars/LifeBar";

function App() {
  const [hiddenWord, setHiddenWord] = useState(getRandomWord());
  const [letter, setLetter] = useState("");
  const [lives, setLives] = useState(5);
  const [guessed, setGuessed] = useState(
    new Array(hiddenWord.length).fill("_").join("")
  );
  const win = guessed === hiddenWord;
  const lost = lives === 0;
  const ref = useRef<HTMLInputElement>(null);

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
    ref.current?.focus();
  };

  return (
    <div className="container px-14 font-serif">
      <header className="border-b border-neutral-500 py-16 mb-16">
        <h1 className="text-5xl">Hangman</h1>
      </header>

      <div className="bg-white rounded-3xl px-6 py-3 flex divide-x divide-neutral-500 w-fit mb-12">
        <LifeBar numberOfLivesLeft={lives} />
        <div className="w-36 text-right">
          <h2 className="text-2xl">Category</h2>
          <output className="text-sm">fruits</output>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 w-[490px]">
        <div className="text-neutral-500 tracking-widest text-2xl mb-24">{guessed}</div>
        <form className="my-2 flex items-center" onSubmit={guess}>
          <input
              autoComplete="off"
              autoFocus
              className="w-40 mr-9 px-5 py-2 rounded-none focus-visible:outline-0 border-b-2 border-neutral-500 placeholder:text-neutral-500 text-lg"
              onChange={onLetterChange}
              placeholder="Enter a letter"
              ref={ref}
              type="text"
              value={letter}
          />
          <Button label="Confirm" type="submit" />
        </form>
        {win && <Alert type="success" title="Congrats!" message="You've guessed it!" />}
        {lost && <Alert type="danger" title="Game over!" />}
        {(win || lost) && (
          <Button label="New game" type="button" onClick={startNewGame} />
        )}
      </div>
    </div>
  );
}

export default App;
