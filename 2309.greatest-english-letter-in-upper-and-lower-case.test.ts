import greatestLetter from './2309.greatest-english-letter-in-upper-and-lower-case';

describe('2309. Greatest English Letter in Upper and Lower Case', () => {
  test('1', () => {
    expect(greatestLetter('lEeTcOdE')).toBe('E');
  });

  test('2', () => {
    expect(greatestLetter('arRAzFif')).toBe('R');
  });

  test('3', () => {
    expect(greatestLetter('AbCdEfGhIjK')).toBe('');
  });
});
