import oddString from './2451.odd-string-difference';

describe('2451. Odd String Difference', () => {
  test('1', () => {
    expect(oddString(['adc', 'wzy', 'abc'])).toBe('abc');
  });

  test('2', () => {
    expect(oddString(['aaa', 'bob', 'ccc', 'ddd'])).toBe('bob');
  });

  test('3', () => {
    expect(oddString(['ddd', 'poo', 'baa', 'onn'])).toBe('ddd');
  });
});
