import { generateTheString } from './1374.generate-a-string-with-characters-that-have-odd-counts';

test('1', () => {
  expect(generateTheString(10)).toEqual('aaaaaaaaab');
});

test('2', () => {
  expect(generateTheString(11)).toEqual('aaaaaaaaaaa');
});
