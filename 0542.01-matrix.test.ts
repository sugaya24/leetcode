import updateMatrix from './0542.01-matrix';

describe('542. 01 Matrix', () => {
  test('1', () => {
    const result = updateMatrix([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
    const expected = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    result.forEach((row) => {
      row.forEach((n, i) => {
        expect(n).toBe(expected[i]);
      });
    });
    expect(result).toBe(expected.length);
  });
  test('2', () => {
    const result = updateMatrix([
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ]);
    const expected = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ];
    result.forEach((row) => {
      row.forEach((n, i) => {
        expect(n).toBe(expected[i]);
      });
    });
    expect(result).toBe(expected.length);
  });
});
