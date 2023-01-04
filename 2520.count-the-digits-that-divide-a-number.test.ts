import countDigits from './2520.count-the-digits-that-divide-a-number';

describe('2520. Count the Digits That Divide a Number', () => {
  test('1', () => {
    expect(countDigits(7)).toBe(1);
  });
  test('2', () => {
    expect(countDigits(121)).toBe(2);
  });
  test('3', () => {
    expect(countDigits(1248)).toBe(4);
  });
});
