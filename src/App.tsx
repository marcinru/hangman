import './App.css'

function App() {
  const hiddenWord = 'apple'.split('');

  return (
    <>
      <h1>Hangman</h1>
      <h2>Lives 3/5</h2>
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
            console.log('not guessed');
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
