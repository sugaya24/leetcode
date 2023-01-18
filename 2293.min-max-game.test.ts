import minMaxGame from './2293.min-max-game';

describe('2293. Min Max Game', () => {
  test('1', () => {
    expect(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])).toBe(1);
  });
  test('2', () => {
    expect(minMaxGame([3])).toBe(3);
  });
  test('3', () => {
    expect(minMaxGame([70, 38, 21, 22])).toBe(22);
  });
});
