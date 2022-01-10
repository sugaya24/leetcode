import { countGoodRectangles } from './1725.number-of-rectangles-that-can-form-the-largest-square';

test('0', () => {
  expect(
    countGoodRectangles([
      [5, 8],
      [3, 9],
      [5, 12],
      [16, 5],
    ])
  ).toBe(3);
});

test('1', () => {
  expect(
    countGoodRectangles([
      [2, 3],
      [3, 7],
      [4, 3],
      [3, 7],
    ])
  ).toBe(3);
});
