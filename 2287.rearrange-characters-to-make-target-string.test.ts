import rearrangeCharacters from './2287.rearrange-characters-to-make-target-string';

describe('2287. Rearrange Characters to Make Target String', () => {
  test('1', () => {
    expect(rearrangeCharacters('ilovecodingonleetcode', 'code')).toBe(2);
  });

  test('2', () => {
    expect(rearrangeCharacters('abcba', 'abc')).toBe(1);
  });

  test('3', () => {
    expect(rearrangeCharacters('abbaccaddaeea', 'aaaaa')).toBe(1);
  });

  test('4', () => {
    expect(rearrangeCharacters('aaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaa')).toBe(
      2,
    );
  });
});
