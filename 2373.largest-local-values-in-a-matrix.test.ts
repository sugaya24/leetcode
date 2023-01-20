import largestLocal from './2373.largest-local-values-in-a-matrix';

describe('2373. Largest Local Values in a Matrix', () => {
  test('1', () => {
    const result = largestLocal([
      [9, 9, 8, 1],
      [5, 6, 2, 6],
      [8, 2, 6, 4],
      [6, 2, 2, 2],
    ]);
    const expected: number[][] = [
      [9, 9],
      [8, 6],
    ];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length; j++) {
        expect(result[i][j]).toBe(expected[i][j]);
      }
    }
    expect(result.length).toBe(expected.length);
  });

  test('2', () => {
    const result = largestLocal([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 2, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ]);
    const expected: number[][] = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length; j++) {
        expect(result[i][j]).toBe(expected[i][j]);
      }
    }
    expect(result.length).toBe(expected.length);
  });
});
