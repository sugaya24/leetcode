import { halvesAreAlike } from './1704.determine-if-string-halves-are-alike';

test('0', () => {
  expect(halvesAreAlike('book')).toBe(true);
});
test('1', () => {
  expect(halvesAreAlike('textbook')).toBe(false);
});
