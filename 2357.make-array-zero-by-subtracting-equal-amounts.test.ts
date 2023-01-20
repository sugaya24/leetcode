import minimumOperations from './2357.make-array-zero-by-subtracting-equal-amounts';

describe('2357. Make Array Zero by Subtracting Equal Amounts', () => {
  test('1', () => {
    expect(minimumOperations([1, 5, 0, 3, 5])).toBe(3);
  });

  test('2', () => {
    expect(minimumOperations([0])).toBe(0);
  });
});
