import { sortString } from './1370.increasing-decreasing-string';

test('1', () => {
  expect(sortString('aaaabbbbcccc')).toBe('abccbaabccba');
});

test('2', () => {
  expect(sortString('rat')).toBe('art');
});
