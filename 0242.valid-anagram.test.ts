import isAnagram from './0242.valid-anagram';

describe('242. Valid Anagram', () => {
  test('1', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  test('2', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });
});
