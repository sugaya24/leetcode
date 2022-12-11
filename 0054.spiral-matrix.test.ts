import spiralOrder from './0054.spiral-matrix';

describe('54. Spiral Matrix', () => {
  test('1', () => {
    const result = spiralOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    result.forEach((n, i) => {
      expect(n).toBe(expected[i]);
    });
    expect(result.length).toBe(expected.length);
  });
  test('2', () => {
    const result = spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]);
    const expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
    result.forEach((n, i) => {
      expect(n).toBe(expected[i]);
    });
    expect(result.length).toBe(expected.length);
  });
});
