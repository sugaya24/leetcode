import { sortedSquares } from './0977.squares-of-a-sorted-array';

test('0', () => {
  const expectedArray = [0, 1, 9, 16, 100];
  sortedSquares([-4, -1, 0, 3, 10]).forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
  expect(sortedSquares([-4, -1, 0, 3, 10]).length).toBe(expectedArray.length);
});

test('1', () => {
  const expectedArray = [4, 9, 9, 49, 121];
  sortedSquares([-7, -3, 2, 3, 11]).forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
  expect(sortedSquares([-7, -3, 2, 3, 11]).length).toBe(expectedArray.length);
});
