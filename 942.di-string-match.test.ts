import { diStringMatch } from './942.di-string-match';

test('1', () => {
  const expected = [0, 4, 1, 3, 2];
  const res = diStringMatch('IDID');
  res.forEach((item, index) => {
    expect(item).toBe(expected[index]);
  });
  expect(res.length).toBe(5);
});

test('2', () => {
  const expected = [0, 1, 2, 3];
  const res = diStringMatch('III');
  res.forEach((item, index) => {
    expect(item).toBe(expected[index]);
  });
  expect(res.length).toBe(4);
});

test('3', () => {
  const expected = [3, 2, 0, 1];
  const res = diStringMatch('DDI');
  res.forEach((item, index) => {
    expect(item).toBe(expected[index]);
  });
  expect(res.length).toBe(4);
});
