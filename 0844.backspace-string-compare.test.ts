import backspaceCompare from './0844.backspace-string-compare';

describe('844. Backspace String Compare', () => {
  test('1', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBe(true);
  });
  test('2', () => {
    expect(backspaceCompare('ab##', 'c#d#')).toBe(true);
  });
  test('3', () => {
    expect(backspaceCompare('a#c', 'b')).toBe(false);
  });
});
