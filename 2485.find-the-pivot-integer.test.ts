import pivotInteger from './2485.find-the-pivot-integer';

describe('2485. Find the Pivot Integer', () => {
  test('1', () => {
    expect(pivotInteger(8)).toBe(6);
  });

  test('2', () => {
    expect(pivotInteger(1)).toBe(1);
  });

  test('3', () => {
    expect(pivotInteger(4)).toBe(-1);
  });
});
