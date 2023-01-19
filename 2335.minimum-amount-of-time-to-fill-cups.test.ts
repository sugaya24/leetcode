import fillCups from './2335.minimum-amount-of-time-to-fill-cups';

describe('2335. Minimum Amount of Time to Fill Cups', () => {
  test('1', () => {
    expect(fillCups([1, 4, 2])).toBe(4);
  });

  test('2', () => {
    expect(fillCups([5, 4, 4])).toBe(7);
  });

  test('3', () => {
    expect(fillCups([5, 0, 0])).toBe(5);
  });
});
