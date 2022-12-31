import coinChange from './0322.coin-change';

describe('322. Coin Change', () => {
  test('1', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });
  test('2', () => {
    expect(coinChange([2], 3)).toBe(-1);
  });
  test('3', () => {
    expect(coinChange([1], 0)).toBe(0);
  });
});
