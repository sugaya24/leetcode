import lengthOfLongestSubstring from './0003.longest-substring-without-repeating-characters';

describe('3. Longest Substring Without Repeating Characters', () => {
  test('1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
