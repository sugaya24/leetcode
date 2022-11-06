import findAnagrams from './0438.find-all-anagrams-in-a-string';

describe('438. Find All Anagrams in a String', () => {
  test('1', () => {
    const result = findAnagrams('cbaebabacd', 'abc');
    const expected = [0, 6];
    result.map((n, i) => {
      expect(n).toBe(expected[i]);
    });
    expect(result.length).toBe(expected.length);
  });
  test('2', () => {
    const result = findAnagrams('abab', 'ab');
    const expected = [0, 1, 2];
    result.map((n, i) => {
      expect(n).toBe(expected[i]);
    });
    expect(result.length).toBe(expected.length);
  });
});
