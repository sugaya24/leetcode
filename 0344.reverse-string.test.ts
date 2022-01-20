import { reverseString } from './0344.reverse-string';

test('0', () => {
  const expectedArray = ['o', 'l', 'l', 'e', 'h'];
  const s = ['h', 'e', 'l', 'l', 'o'];
  reverseString(s);
  s.forEach((str, i) => {
    expect(str).toBe(expectedArray[i]);
  });
  expect(s.length).toBe(expectedArray.length);
});

test('1', () => {
  const expectedArray = ['h', 'a', 'n', 'n', 'a', 'H'];
  const s = ['H', 'a', 'n', 'n', 'a', 'h'];
  reverseString(s);
  s.forEach((str, i) => {
    expect(str).toBe(expectedArray[i]);
  });
  expect(s.length).toBe(expectedArray.length);
});
