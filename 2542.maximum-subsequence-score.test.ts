import maxScore from './2542.maximum-subsequence-score';

describe('2542. Maximum Subsequence Score', () => {
  test('1', () => {
    expect(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3)).toBe(12);
  });

  test('2', () => {
    expect(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1)).toBe(30);
  });
});
