import smallestEvenMultiple from './2413.smallest-even-multiple';

describe('2413. Smallest Even Multiple', () => {
  test('1', () => {
    expect(smallestEvenMultiple(5)).toBe(10);
  });

  test('2', () => {
    expect(smallestEvenMultiple(6)).toBe(6);
  });
});
