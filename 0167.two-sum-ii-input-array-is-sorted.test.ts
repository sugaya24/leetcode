import { twoSum } from './0167.two-sum-ii-input-array-is-sorted';

test('0', () => {
  const expectedArray = [1, 2];
  const numbers = [2, 7, 11, 15];
  const target = 9;
  twoSum(numbers, target).forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
  expect(twoSum(numbers, target).length).toBe(expectedArray.length);
});

test('1', () => {
  const expectedArray = [1, 3];
  const numbers = [2, 3, 4];
  const target = 6;
  twoSum(numbers, target).forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
  expect(twoSum(numbers, target).length).toBe(expectedArray.length);
});

test('2', () => {
  const expectedArray = [1, 2];
  const numbers = [-1, 0];
  const target = -1;
  twoSum(numbers, target).forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
  expect(twoSum(numbers, target).length).toBe(expectedArray.length);
});
