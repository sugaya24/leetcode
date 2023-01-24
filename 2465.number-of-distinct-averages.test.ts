import distinctAverages from './2465.number-of-distinct-averages';

describe('2465. Number of Distinct Averages', () => {
  test('1', () => {
    expect(distinctAverages([4, 1, 4, 0, 3, 5])).toBe(2);
  });

  test('2', () => {
    expect(distinctAverages([1, 100])).toBe(1);
  });
});
