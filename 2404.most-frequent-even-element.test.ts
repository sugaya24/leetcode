import mostFrequentEven from './2404.most-frequent-even-element';

describe('2404. Most Frequent Even Element', () => {
  test('1', () => {
    expect(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])).toBe(2);
  });

  test('2', () => {
    expect(mostFrequentEven([4, 4, 4, 9, 2, 4])).toBe(4);
  });

  test('3', () => {
    expect(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])).toBe(-1);
  });

  test('4', () => {
    expect(mostFrequentEven([0, 1, 4, 4, 1, 2, 2])).toBe(2);
  });

  test('5', () => {
    expect(mostFrequentEven([0, 0, 0, 0])).toBe(0);
  });
});
