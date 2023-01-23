import commonFactors from './2427.number-of-common-factors';

describe('2427. Number of Common Factors', () => {
  test('1', () => {
    expect(commonFactors(12, 6)).toBe(4);
  });

  test('2', () => {
    expect(commonFactors(25, 30)).toBe(2);
  });

  test('3', () => {
    expect(commonFactors(885, 885)).toBe(8);
  });
});
