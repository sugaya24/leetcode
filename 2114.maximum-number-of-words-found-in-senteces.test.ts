import { mostWordsFound } from './2114.maximum-number-of-words-found-in-senteces';

test('0', () => {
  expect(
    mostWordsFound([
      'alice and bob love leetcode',
      'i think so too',
      'this is great thanks very much',
    ])
  ).toBe(6);
});
test('1', () => {
  expect(
    mostWordsFound(['please wait', 'continue to fight', 'continue to win'])
  ).toBe(3);
});
