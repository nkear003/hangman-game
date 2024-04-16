import React from 'react';
import './App.css';
import type { Word } from './types';
import { words, alphabet } from './data';
import { getRandomNumber } from './helpers';

function App() {
  function selectWord(): Word {
    const max = words.length;
    const randomNum = getRandomNumber(max);
    return words[randomNum];
  }

  function createEmptySpaces() {
    let string = '';
    for (let i = 0; i < randomWord.name.length; i++) {
      string += '_ ';
    }
    return string;
  }

  const randomWord = selectWord();
  const emptySpaces = createEmptySpaces();

  return (
    <>
      <header>
        <h1 className="text-xl">Hangman game</h1>
      </header>

      {/* Flex container */}
      <div className="flex flex-wrap">
        {/* Left side */}
        <div className="flex flex-col flex-grow flex-shrink basis-0">
          <section id="guesses">
            <h2>Category</h2>
            <p className="capitalize">
              {randomWord?.category
                ? randomWord.category
                : 'There was an issue selecting a random word'}
            </p>
            <p>{emptySpaces}</p>
          </section>

          <section id="alphabet">
            <div className="break-all text-center">
              {alphabet.map((letter) => (
                <span className="text-3xl hover:cursor-pointer">{letter}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Right side */}
        <div className="flex flex-grow flex-shrink basis-0">
          <section id="noose">This is where the noose will be</section>
        </div>
      </div>
    </>
  );
}

export default App;
