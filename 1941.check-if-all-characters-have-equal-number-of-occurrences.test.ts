import { areOccurrencesEqual } from './1941.check-if-all-characters-have-equal-number-of-occurrences';

test('1', () => {
  expect(areOccurrencesEqual('abacbc')).toBe(true);
});

test('2', () => {
  expect(areOccurrencesEqual('aaabb')).toBe(false);
});
