import groupAnagrams from './0049.group-anagrams';

describe('49. Group Anagrams', () => {
  test('1', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    const expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
    expect(result.length).toBe(expected.length);
  });
  test('2', () => {
    const result = groupAnagrams(['']);
    const expected = [['']];
    expect(result.length).toBe(expected.length);
  });
  test('3', () => {
    const result = groupAnagrams(['a']);
    const expected = [['a']];
    expect(result.length).toBe(expected.length);
  });
});
