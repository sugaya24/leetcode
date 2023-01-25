import maximumValue from './2496.maximum-value-of-a-string-in-an-array';

describe('2496. Maximum Value of a String in an Array', () => {
  test('1', () => {
    expect(maximumValue(['alic3', 'bob', '3', '4', '00000'])).toBe(5);
  });

  test('2', () => {
    expect(maximumValue(['1', '01', '001', '0001'])).toBe(1);
  });
});
