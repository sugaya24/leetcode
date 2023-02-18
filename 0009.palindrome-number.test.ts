import isPalindrome from './0009.palindrome-number';

describe('9. Palindrome Number', () => {
  test('1', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('2', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test('3', () => {
    expect(isPalindrome(10)).toBe(false);
  });
});
