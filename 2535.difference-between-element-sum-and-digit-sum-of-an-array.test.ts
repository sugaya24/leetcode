import differenceOfSum from './2535.difference-between-element-sum-and-digit-sum-of-an-array';

describe('2535. Difference Between Element Sum and Digit Sum of an Array', () => {
  test('1', () => {
    expect(differenceOfSum([1, 15, 6, 3])).toBe(9);
  });

  test('2', () => {
    expect(differenceOfSum([1, 2, 3, 4])).toBe(0);
  });
});
