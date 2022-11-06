import maxArea from './0011.container-with-most-water';

describe('11. Container With Most Water', () => {
  test('1', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
  test('2', () => {
    expect(maxArea([1, 1])).toBe(1);
  });
  test('3', () => {
    expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toBe(17);
  });
});
