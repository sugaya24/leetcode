import isCircularSentence from './2490.circular-sentence';

describe('2490. Circular Sentence', () => {
  test('1', () => {
    expect(isCircularSentence('leetcode exercises sound delightful')).toBe(
      true,
    );
  });

  test('2', () => {
    expect(isCircularSentence('eetcode')).toBe(true);
  });

  test('3', () => {
    expect(isCircularSentence('Leetcode is cool')).toBe(false);
  });
});
