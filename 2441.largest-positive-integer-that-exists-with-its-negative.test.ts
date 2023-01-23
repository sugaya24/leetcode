import findMaxK from './2441.largest-positive-integer-that-exists-with-its-negative';

describe('2441. Largest Positive Integer That Exists With Its Negative', () => {
  test('1', () => {
    expect(findMaxK([-1, 2, -3, 3])).toBe(3);
  });

  test('2', () => {
    expect(findMaxK([-1, 10, 6, 7, -7, 1])).toBe(7);
  });
  test('3', () => {
    expect(findMaxK([-10, 8, 6, 7, -2, -3])).toBe(-1);
  });
});
