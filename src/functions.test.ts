import { getRandomWord, getRandomNumber, drawGuesses, removeLetterFromAlphabet } from './helpers';

const mockWords = [{ category: 'fruit', name: 'apple' }];

describe('selectRandomWord', () => {
  it('should return one item from the array', () => {
    const selectedWord = getRandomWord(mockWords);
    expect(mockWords.includes(selectedWord)).toBeTruthy();
  });
});

describe('getRandomNumber', () => {
  it('should return random integer between 0 and the max number passed to function', () => {
    const numberOfTests = 15;
    const maxNumber = 10;
    for (let i = 0; i < numberOfTests; i++) {
      const randomNum = getRandomNumber(maxNumber);
      expect(randomNum).toBeGreaterThanOrEqual(0);
      expect(randomNum).toBeLessThan(maxNumber);
    }
  });
});

describe('drawGuesses', () => {
  it('should return a blank space (_) for each letter that has been guessed correctly', () => {
    const word = 'CAT';
    const guessedLetters = ['A'];
    const result = drawGuesses(word, guessedLetters);
    expect(result).toEqual(['_', 'A', '_']);
  });

  // TODO Add a test for if there's no letter, or other cases

  it('should draw empty spaces for each letter if there are no guesses', () => {
    const word = 'CAT';
    const guessedLetters: string[] = [];
    const result = drawGuesses(word, guessedLetters);
    expect(result).toEqual(['_', '_', '_']);
  });
});

describe('removeLetterFromAlphabet', () => {
  it('should return the alphabet with the letter removed, if the letter exists in the alphabet', () => {
    const alphabet = ['A', 'B', 'C'];
    const updatedAlphabet = removeLetterFromAlphabet('A', alphabet);

    expect(updatedAlphabet).toEqual(['B', 'C']);
  });

  it('should still work if you pass a lowercase letter', () => {
    const alphabet = ['A', 'B', 'C'];
    const updatedAlphabet = removeLetterFromAlphabet('a', alphabet);

    expect(updatedAlphabet).toEqual(['B', 'C']);
  });

  it('should return an empty array if there is an error', () => {
    // @ts-ignore we need it to have a ts error here
    const updatedAlphabet = removeLetterFromAlphabet();

    expect(updatedAlphabet).toEqual(['']);
  });
});
