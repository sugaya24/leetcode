import unequalTriplets from './2475.number-of-unequal-triplets-in-array';

describe('2475. Number of Unequal Triplets in Array', () => {
  test('1', () => {
    expect(unequalTriplets([4, 4, 2, 4, 3])).toBe(3);
  });

  test('2', () => {
    expect(unequalTriplets([1, 1, 1, 1, 1])).toBe(0);
  });
});
