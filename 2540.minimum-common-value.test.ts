import getCommon from './2540.minimum-common-value';

describe('2540. Minimum Common Value', () => {
  test('1', () => {
    expect(getCommon([1, 2, 3], [2, 4])).toBe(2);
  });

  test('2', () => {
    expect(getCommon([1, 2, 3, 6], [2, 3, 4, 5])).toBe(2);
  });
});
