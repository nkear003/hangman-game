// TODO: Remove
// import { alphabet } from './data';
import type { Word } from './types';

export const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

export const getRandomWord = (words: Word[]): Word => {
  const max = words.length;
  const randomNum = getRandomNumber(max);
  return words[randomNum];
};

export const drawGuesses = (word: string, guessedLetters: string[] = ['']) => {
  return word
    .split('')
    .map((letter) =>
      guessedLetters.includes(letter) ? `<span>${letter}</span>` : `<span>_</span>`,
    );
};

// TODO: Remove
// export const alphabetString = alphabet.join(' ');
