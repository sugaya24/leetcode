import { rotate } from './0189.rotate-array';

test('0', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const expectedArray = [5, 6, 7, 1, 2, 3, 4];
  rotate(nums, 3);
  nums.forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
  expect(nums.length).toBe(expectedArray.length);
});

test('1', () => {
  const nums = [-1, -100, 3, 99];
  const expectedArray = [3, 99, -1, -100];
  rotate(nums, 2);
  nums.forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
  expect(nums.length).toBe(expectedArray.length);
});
