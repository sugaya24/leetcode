import minNumberOfHours from './2383.minimum-hours-of-training-to-win-a-competition';

describe('2383. Minimum Hours of Training to Win a Competition', () => {
  test('1', () => {
    expect(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1])).toBe(8);
  });

  test('2', () => {
    expect(minNumberOfHours(2, 4, [1], [3])).toBe(0);
  });

  test('3', () => {
    expect(minNumberOfHours(1, 1, [1, 1, 1, 1], [1, 1, 1, 50])).toBe(51);
  });

  test('4', () => {
    expect(minNumberOfHours(5, 3, [1, 4], [2, 5])).toBe(2);
  });
});
