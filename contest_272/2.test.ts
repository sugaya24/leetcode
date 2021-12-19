import { addSpaces } from './2';

test('0', () => {
  expect(addSpaces('LeetcodeHelpsMeLearn', [8, 13, 15])).toBe(
    'Leetcode Helps Me Learn'
  );
});
test('1', () => {
  expect(addSpaces('icodeinpython', [1, 5, 7, 9])).toBe('i code in py thon');
});
test('2', () => {
  expect(addSpaces('spacing', [0, 1, 2, 3, 4, 5, 6])).toBe(' s p a c i n g');
});
