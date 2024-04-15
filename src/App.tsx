import React from 'react';
import './App.css';
import type { Word } from './types';
import { words } from './data';
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
    <div>
      <h1>Hangman game</h1>
      <pre>{JSON.stringify(randomWord)}</pre>
      <section id="guesses">
        <h2>Category</h2>
        <p>
          {randomWord?.category
            ? randomWord.category
            : 'There was an issue selecting a random word'}
        </p>
        <p>{emptySpaces}</p>
      </section>

      <section id="alphabet">
        <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      </section>

      <section id="noose">This is where the noose will be</section>
    </div>
  );
}

export default App;
