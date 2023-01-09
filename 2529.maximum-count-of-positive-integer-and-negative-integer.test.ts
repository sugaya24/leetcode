import maximumCount from './2529.maximum-count-of-positive-integer-and-negative-integer';

describe('2529. Maximum Count of Positive Integer and Negative Integer', () => {
  test('1', () => {
    expect(maximumCount([-2, -1, -1, 1, 2, 3])).toBe(3);
  });
  test('2', () => {
    expect(maximumCount([-3, -2, -1, 0, 0, 1, 2])).toBe(3);
  });
  test('3', () => {
    expect(maximumCount([5, 20, 66, 1314])).toBe(4);
  });
});
