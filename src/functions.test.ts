import { getRandomWord, getRandomNumber, drawGuesses } from './helpers';

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
  it('should return a blank space (_) for each letter that has been guessed correctly, and the guessed letter for each correct guess. Each should be wrapped in <span> tags', () => {
    const word = 'CAT';
    const guessedLetters = ['A'];
    const result = drawGuesses(word, guessedLetters);
    expect(result).toEqual(['<span>_</span>', '<span>A</span>', '<span>_</span>']);
  });

  it('should draw empty spaces for each letter if there are no guesses', () => {
    const word = 'CAT';
    const guessedLetters: string[] = [];
    const result = drawGuesses(word, guessedLetters);
    expect(result).toEqual(['<span>_</span>', '<span>_</span>', '<span>_</span>']);
  });
});
