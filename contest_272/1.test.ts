import { firstPalindrome } from './1';

test('0', () => {
  expect(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool'])).toBe('ada');
});
test('1', () => {
  expect(firstPalindrome(['notapalindrome', 'racecar'])).toBe('racecar');
});
test('2', () => {
  expect(firstPalindrome(['def', 'ghi'])).toBe('');
});
