import repeatedCharacter from './2351.first-letter-to-appear-twice';

describe('2351. First Letter to Appear Twice', () => {
  test('1', () => {
    expect(repeatedCharacter('abccbaacz')).toBe('c');
  });

  test('2', () => {
    expect(repeatedCharacter('abcdd')).toBe('d');
  });
});
