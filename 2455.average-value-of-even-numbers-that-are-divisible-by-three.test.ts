import averageValue from './2455.average-value-of-even-numbers-that-are-divisible-by-three';

describe('2455. Average Value of Even Numbers That Are Divisible by Three', () => {
  test('1', () => {
    expect(averageValue([1, 3, 6, 10, 12, 15])).toBe(9);
  });

  test('2', () => {
    expect(averageValue([1, 2, 4, 7, 10])).toBe(0);
  });
});
