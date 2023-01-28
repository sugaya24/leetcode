import digitCount from './2283.check-if-number-has-equal-digit-count-and-digit-value';

describe('2283. Check if Number Has Equal Digit Count and Digit Value', () => {
  test('1', () => {
    expect(digitCount('1210')).toBe(true);
  });

  test('2', () => {
    expect(digitCount('030')).toBe(false);
  });
});
