import type { Word } from './types';

export const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

export const getRandomWord = (words: Word[]): Word => {
  const max = words.length;
  const randomNum = getRandomNumber(max);
  return words[randomNum];
};

export const drawInitialLines = (word: string) => word.split('').map((letter) => '_');

export const drawGuesses = (wordToGuess: string, guessedLetters: string[] = ['']) => {
  // Convert to uppercase to avoid issues
  wordToGuess = wordToGuess.toUpperCase();

  // Check each letter in the word we are solving to see if it is in our guessed letters. If it is, return the letter of the word we are guessing, otherwise a blank space
  return wordToGuess
    .split('')
    .map((letterOfWordToGuess) =>
      guessedLetters.includes(letterOfWordToGuess) ? letterOfWordToGuess : '_',
    );
};

/**
 *  Removes a letter from an alphabet
 *
 * @param letterToRemove The letter to remove from the alphabet
 * @param alphabet Alphabet we will update
 * @returns Alphabet with letter remove if it existed, the original array if it didn't, or an array with one empty string if there was an error
 */
export const removeLetterFromAlphabet = (letterToRemove: string, alphabet: string[] = ['']) => {
  // If there's no letter passed in, return alphabet
  if (!letterToRemove) return alphabet;

  // Convert letter to uppercase to prevent issues
  letterToRemove = letterToRemove.toUpperCase();

  // Convert to set and remove letter
  const alphabetSet = new Set(alphabet);
  alphabetSet.delete(letterToRemove);

  // Convert back to an array and return
  return Array.from(alphabetSet);
};
