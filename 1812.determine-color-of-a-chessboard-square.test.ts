import { squareIsWhite } from './1812.determine-color-of-a-chessboard-square';

test('1', async () => {
  expect(squareIsWhite('a1')).toBe(false);
});

test('2', () => {
  expect(squareIsWhite('h3')).toBe(true);
});

test('3', () => {
  expect(squareIsWhite('c7')).toBe(false);
});
