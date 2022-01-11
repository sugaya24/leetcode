import { diagonalSum } from './1572.matrix-diagonal-sum';

test('0', () => {
  expect(
    diagonalSum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toBe(25);
});
test('1', () => {
  expect(
    diagonalSum([
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ])
  ).toBe(8);
});
test('2', () => {
  expect(diagonalSum([[5]])).toBe(5);
});
test('3', () => {
  expect(
    diagonalSum([
      [7, 3, 1, 9],
      [3, 4, 6, 9],
      [6, 9, 6, 6],
      [9, 5, 8, 5],
    ])
  ).toBe(55);
});
