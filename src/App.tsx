import React, { useState } from 'react';
import './App.scss';
import { words, alphabet } from './data';
import {
  getRandomWord,
  drawInitialLines,
  drawGuesses,
  removeLetterFromAlphabet,
} from './functions';
import HangmanSvg from './HangmanSvg';

function App() {
  const alphabetClone = [...alphabet];

  const [gameWord, setGameWord] = useState(getRandomWord(words));
  const [activeAlphabet, setActiveAlphabet] = useState(alphabetClone);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [guessedLettersDisplay, setGuessedLettersDisplay] = useState(
    drawInitialLines(gameWord.name),
  );

  const handleGameReset = () => {
    setActiveAlphabet([...alphabet]);
    setGuessedLetters([]);
    setGameWord(getRandomWord(words));
    setGuessedLettersDisplay(drawInitialLines(gameWord.name));
  };

  const handleAlphabetClick = (
    e: React.MouseEvent<HTMLDivElement | HTMLSpanElement | HTMLButtonElement, MouseEvent>,
  ) => {
    // If we are at the end of the game, don't allow more clicks
    if (guessedLetters.length === 6) {
      // TODO Do something here to alert the user
      console.log('Out of guesses');
      return;
    }

    const target = e.target as HTMLElement;

    // Since we use event propagation, check for correct HTML element
    if (target.tagName !== 'BUTTON' || !target.textContent) return;

    // Get the letter from the HTML element
    const guessedLetter = target.textContent;

    // If we haven't guessed this letter before, remove it
    if (!guessedLetters.includes(guessedLetter)) {
      // Update the active alphabet with the new array, with the guessed letter removed
      const updatedActiveAlphabet = removeLetterFromAlphabet(guessedLetter, activeAlphabet);
      setActiveAlphabet(updatedActiveAlphabet);

      // Update the guessed letters with whatever was already there plus the new one
      const updatedGuessedLetters = [...guessedLetters, guessedLetter];
      setGuessedLetters(updatedGuessedLetters);

      // Update update the guessed letters
      const updatedGuessedLettersDisplay = drawGuesses(gameWord.name, updatedGuessedLetters);
      // Use a variable rather than waiting on state to update
      setGuessedLettersDisplay(updatedGuessedLettersDisplay);
    }
  };

  return (
    <main className="p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Hangman game</h1>
      </header>

      {/* Flex container */}
      <div className="flex flex-wrap gap-6 mb-6">
        {/* Left side */}
        <div className="flex flex-col flex-1 gap-6">
          <section className="flex flex-col gap-6">
            <div className="flex">
              <p className="uppercase border-2 border-black p-2">
                {gameWord.category
                  ? gameWord.category
                  : 'There was an issue selecting a random word'}
              </p>
            </div>
            <div className="flex gap-3 text-3xl">
              {guessedLettersDisplay.map((letter, index) => (
                <span key={`alphabet-${index}-${letter}`}>{letter}</span>
              ))}
            </div>
          </section>

          <section>
            <div
              onClick={handleAlphabetClick}
              className="flex flex-wrap gap-1.5 break-all text-left"
            >
              {activeAlphabet.map((letter, index) => (
                <button
                  key={`alphabet-${index}-${letter}`}
                  className="w-8 -ml-1.5 flex hover:cursor-pointer hover:text-white hover:bg-black"
                >
                  <span className="text-3xl m-auto pointer-events-none">{letter}</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Right side */}
        <div className="flex flex-1">
          <section>
            <HangmanSvg numberOfGuesses={guessedLetters.length} />
          </section>
        </div>
      </div>
      <button
        className="bg-black text-white p-2 hover:bg-white hover:text-black border-black border-2 rounded-full"
        onClick={handleGameReset}
      >
        Reset game
      </button>
    </main>
  );
}

export default App;
