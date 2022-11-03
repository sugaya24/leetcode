import findMin from './0153.find-minimum-in-rotated-sorted-array';

describe('153. Find Minimum in Rotated Sorted Array', () => {
  test('1', () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  });
  test('2', () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  });
  test('3', () => {
    expect(findMin([11, 13, 15, 17])).toBe(11);
  });
  test('4', () => {
    expect(findMin([11, 13, 15, 17, 0])).toBe(0);
  });
  test('5', () => {
    expect(findMin([1])).toBe(1);
  });
  test('6', () => {
    expect(findMin([2, 1])).toBe(1);
  });
});
