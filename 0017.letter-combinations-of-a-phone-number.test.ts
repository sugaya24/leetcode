import letterCombinations from './0017.letter-combinations-of-a-phone-number';

describe('17. Letter Combinations of a Phone Number', () => {
  test('1', () => {
    const result = letterCombinations('23');
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    result.map((n, i) => {
      expect(n).toBe(expected[i]);
    });
    expect(result.length).toBe(expected.length);
  });
  test('2', () => {
    const result = letterCombinations('');
    const expected = [];
    expect(result.length).toBe(expected.length);
  });
  test('3', () => {
    const result = letterCombinations('2');
    const expected = ['a', 'b', 'c'];
    result.map((n, i) => {
      expect(n).toBe(expected[i]);
    });
    expect(result.length).toBe(expected.length);
  });
});
