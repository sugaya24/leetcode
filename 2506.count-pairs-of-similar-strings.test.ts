import similarPairs from './2506.count-pairs-of-similar-strings';

describe('2506. Count Pairs Of Similar Strings', () => {
  test('1', () => {
    expect(similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc'])).toBe(2);
  });

  test('2', () => {
    expect(similarPairs(['aabb', 'ab', 'ba'])).toBe(3);
  });

  test('3', () => {
    expect(similarPairs(['nba', 'cba', 'dba'])).toBe(0);
  });
});
