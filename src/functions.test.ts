import { getRandomWord, getRandomNumber } from './helpers';

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
