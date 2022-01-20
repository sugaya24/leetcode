import { reverseWords } from './0557.reverse-words-in-a-string-iii';

test('0', () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe(
    "s'teL ekat edoCteeL tsetnoc"
  );
});

test('1', () => {
  expect(reverseWords('God Ding')).toBe('doG gniD');
});
