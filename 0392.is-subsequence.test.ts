import isSubsequence from './0392.is-subsequence';

describe('392. Is Subsequence', () => {
  test('1', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
  });
  test('2', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
  });
});
