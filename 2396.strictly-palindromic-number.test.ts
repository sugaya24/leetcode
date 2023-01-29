import isStrictlyPalindromic from './2396.strictly-palindromic-number';

describe('2396. Strictly Palindromic Number', () => {
  test('1', () => {
    expect(isStrictlyPalindromic(9)).toBe(false);
  });

  test('2', () => {
    expect(isStrictlyPalindromic(4)).toBe(false);
  });
});
