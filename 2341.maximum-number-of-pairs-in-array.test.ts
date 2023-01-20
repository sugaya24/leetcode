import numberOfPairs from './2341.maximum-number-of-pairs-in-array';

describe('2341. Maximum Number of Pairs in Array', () => {
  test('1', () => {
    const result = numberOfPairs([1, 3, 2, 1, 3, 2, 2]);
    const expected = [3, 1];
    for (const [i, n] of result.entries()) {
      expect(n).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });
  test('2', () => {
    const result = numberOfPairs([1, 1]);
    const expected = [1, 0];
    for (const [i, n] of result.entries()) {
      expect(n).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });
  test('3', () => {
    const result = numberOfPairs([0]);
    const expected = [0, 1];
    for (const [i, n] of result.entries()) {
      expect(n).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });
});
