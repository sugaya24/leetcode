import countTime from './2437.number-of-valid-clock-times';

describe('2437. Number of Valid Clock Times', () => {
  test('1', () => {
    expect(countTime('?5:00')).toBe(2);
  });

  test('2', () => {
    expect(countTime('0?:0?')).toBe(100);
  });

  test('3', () => {
    expect(countTime('??:??')).toBe(1440);
  });

  test('4', () => {
    expect(countTime('2?:??')).toBe(240);
  });
});
