import pivotIndex from './0724.find-pivot-index';

describe('724. Find Pivot Index', () => {
  test('1', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  });
  test('2', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1);
  });
  test('3', () => {
    expect(pivotIndex([2, 1, -1])).toBe(0);
  });
});
