import convertTime from './2224.minimum-number-of-operations-to-convert-time';

describe('2224. Minimum Number of Operations to Convert Time', () => {
  test('1', () => {
    expect(convertTime('02:30', '04:35')).toBe(3);
  });
  test('2', () => {
    expect(convertTime('11:00', '11:01')).toBe(1);
  });
});
