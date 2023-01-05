import runningSum from './1480.running-sum-of-1d-array';

describe('1480. Running Sum of 1d Array', () => {
  test('1', () => {
    const result = runningSum([1, 2, 3, 4]);
    const expected = [1, 3, 6, 10];
    for (const [i, n] of result.entries()) {
      expect(n).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });
  test('2', () => {
    const result = runningSum([1, 1, 1, 1, 1]);
    const expected = [1, 2, 3, 4, 5];
    for (const [i, n] of result.entries()) {
      expect(n).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });
  test('3', () => {
    const result = runningSum([3, 1, 2, 10, 1]);
    const expected = [3, 4, 6, 16, 17];
    for (const [i, n] of result.entries()) {
      expect(n).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });
});
