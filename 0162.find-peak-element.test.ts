import findPeakElement from './0162.find-peak-element';

describe('162. Find Peak Element', () => {
  test('1', () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
  });
  test('2', () => {
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(5);
  });
  test('3', () => {
    expect(findPeakElement([1])).toBe(0);
  });
  test('4', () => {
    expect(findPeakElement([1, 2, 3, 4, 5])).toBe(4);
  });
  test('5', () => {
    expect(findPeakElement([5, 4, 2, 1])).toBe(0);
  });
});
