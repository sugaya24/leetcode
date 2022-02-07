import { freqAlphabets } from './1309.decrypt-string-from-alphabet-to-integer-mapping';

test('1', () => {
  expect(freqAlphabets('10#11#12')).toBe('jkab');
});
test('2', () => {
  expect(freqAlphabets('1326#')).toBe('acz');
});
