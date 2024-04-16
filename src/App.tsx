import React from 'react';
import './App.css';
import { words, alphabet } from './data';
import { getRandomWord, drawGuesses } from './helpers';

function App() {
  const randomWord = getRandomWord(words);
  const emptySpaces = drawGuesses(randomWord.name);

  return (
    <main className="p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Hangman game</h1>
      </header>

      {/* Flex container */}
      <div className="flex flex-wrap gap-6">
        {/* Left side */}
        <div className="flex flex-col flex-1 gap-6">
          <section className="flex flex-col gap-6">
            <div className="flex">
              <p className="uppercase border-2 border-black p-2">
                {randomWord?.category
                  ? randomWord.category
                  : 'There was an issue selecting a random word'}
              </p>
            </div>
            <p>{emptySpaces}</p>
          </section>

          <section>
            <div className="break-all text-left">
              {alphabet.map((letter) => (
                <span className="text-3xl hover:cursor-pointer">{letter}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Right side */}
        <div className="flex flex-1">
          <section id="noose">This is where the noose will be</section>
        </div>
      </div>
    </main>
  );
}

export default App;
