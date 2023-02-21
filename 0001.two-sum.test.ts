import { twoSum } from './0001.two-sum';

describe('1. Two Sum', () => {
  test('1', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    const expected: number[] = [0, 1];
    result.forEach((n, i) => {
      expect(n).toBe(expected[i]);
    });
    expect(result.length).toBe(expected.length);
  });

  test('2', () => {
    const result = twoSum([3, 2, 4], 6);
    const expected: number[] = [1, 2];
    result.forEach((n, i) => {
      expect(n).toBe(expected[i]);
    });
    expect(result.length).toBe(expected.length);
  });

  test('3', () => {
    const result = twoSum([3, 3], 6);
    const expected: number[] = [0, 1];
    result.forEach((n, i) => {
      expect(n).toBe(expected[i]);
    });
    expect(result.length).toBe(expected.length);
  });
});
