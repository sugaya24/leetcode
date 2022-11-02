import searchRange from './0034.find-first-and-last-position-of-element-in-sorted-array';

test('34. Find First and Last Position of Element in Sorted Array', () => {
  const result1 = searchRange([5, 7, 7, 8, 8, 10], 8);
  const expected1 = [3, 4];
  result1.forEach((n, i) => {
    expect(expected1[i]).toBe(n);
  });
  expect(result1.length).toBe(expected1.length);

  const result2 = searchRange([5, 7, 7, 8, 8, 10], 6);
  const expected2 = [-1, -1];
  result2.forEach((n, i) => {
    expect(expected2[i]).toBe(n);
  });
  expect(result2.length).toBe(expected2.length);

  const result3 = searchRange([], 0);
  const expected3 = [-1, -1];
  result3.forEach((n, i) => {
    expect(expected3[i]).toBe(n);
  });
  expect(result3.length).toBe(expected3.length);
});
