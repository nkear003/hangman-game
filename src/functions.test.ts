import { getRandomWord } from './helpers';

const mockWords = [{ category: 'fruit', name: 'apple' }];

describe('selectRandomWord', () => {
  it('should return one item from the array', () => {
    const selectedWord = getRandomWord(mockWords);
    expect(mockWords.includes(selectedWord)).toBeTruthy();
  });
});
