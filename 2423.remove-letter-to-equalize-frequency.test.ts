import equalFrequency from './2423.remove-letter-to-equalize-frequency';

describe('2423. Remove Letter To Equalize Frequency', () => {
  test('1', () => {
    expect(equalFrequency('abcc')).toBe(true);
  });

  test('2', () => {
    expect(equalFrequency('aazz')).toBe(false);
  });

  test('3', () => {
    expect(equalFrequency('abc')).toBe(true);
  });

  test('4', () => {
    expect(equalFrequency('ddaccb')).toBe(false);
  });

  test('5', () => {
    expect(equalFrequency('cccaa')).toBe(true);
  });
});
