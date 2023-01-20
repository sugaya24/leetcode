import arithmeticTriplets from './2367.number-of-arithmetic-triplets';

describe('2367. Number of Arithmetic Triplets', () => {
  test('1', () => {
    expect(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)).toBe(2);
  });

  test('2', () => {
    expect(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)).toBe(2);
  });
});
