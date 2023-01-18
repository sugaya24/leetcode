import calculateTax from './2303.calculate-amount-paid-in-taxes';

describe('2303. Calculate Amount Paid in Taxes', () => {
  test('1', () => {
    expect(
      calculateTax(
        [
          [3, 50],
          [7, 10],
          [12, 25],
        ],
        10,
      ),
    ).toBe(2.65);
  });
  test('2', () => {
    expect(
      calculateTax(
        [
          [1, 0],
          [4, 25],
          [5, 50],
        ],
        2,
      ),
    ).toBe(0.25);
  });
  test('3', () => {
    expect(calculateTax([[2, 50]], 0)).toBe(0.0);
  });
});
