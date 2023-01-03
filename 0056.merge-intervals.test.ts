import merge from './0056.merge-intervals';

describe('56. Merge Intervals', () => {
  test('1', () => {
    const result = merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]);
    const expected = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    for (let i = 0; i < result.length; i++) {
      const [s, e] = result[i];
      expect(s).toBe(expected[i][0]);
      expect(e).toBe(expected[i][1]);
    }
    expect(result.length).toBe(expected.length);
  });
  test('2', () => {
    const result = merge([
      [1, 4],
      [4, 5],
    ]);
    const expected = [[1, 5]];
    for (let i = 0; i < result.length; i++) {
      const [s, e] = result[i];
      expect(s).toBe(expected[i][0]);
      expect(e).toBe(expected[i][1]);
    }
    expect(result.length).toBe(expected.length);
  });
});
