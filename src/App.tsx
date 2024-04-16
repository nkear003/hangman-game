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
        <h1>Hangman game</h1>
      </header>

      {/* Left side */}
      <div className="flex">
        <div className="flex flex-col basis-1/4">
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
            {alphabet.map((letter) => {
              return <span className="text-3xl hover:cursor-pointer">{letter}</span>;
            })}
          </section>
        </div>
      </div>

      {/* Right side */}
      <div className="">
        <section id="noose">This is where the noose will be</section>
      </div>
    </>
  );
}

export default App;
