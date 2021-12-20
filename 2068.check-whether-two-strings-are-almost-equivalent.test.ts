import { checkAlmostEquivalent } from './2068.check-whether-two-strings-are-almost-equivalent';

test('0', () => {
  expect(checkAlmostEquivalent('aaaa', 'bccb')).toBe(false);
});
test('1', () => {
  expect(checkAlmostEquivalent('abcdeef', 'abaaacc')).toBe(true);
});
test('2', () => {
  expect(checkAlmostEquivalent('cccddabba', 'babababab')).toBe(true);
});
test('3', () => {
  expect(checkAlmostEquivalent('zzzyyy', 'iiiiii')).toBe(false);
});
