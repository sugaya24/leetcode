import minimumRecolors from './2379.minimum-recolors-to-get-k-consecutive-black-blocks';

describe('2379. Minimum Recolors to Get K Consecutive Black Blocks', () => {
  test('1', () => {
    expect(minimumRecolors('WBBWWBBWBW', 7)).toBe(3);
  });

  test('2', () => {
    expect(minimumRecolors('WBWBBBW', 2)).toBe(0);
  });

  test('3', () => {
    expect(minimumRecolors('BWWWBB', 6)).toBe(3);
  });

  test('4', () => {
    expect(minimumRecolors('WBWW', 2)).toBe(1);
  });

  test('5', () => {
    expect(minimumRecolors('WBBWWWWBBWWBBBBWWBBWWBBBWWBBBWWWBWBWW', 15)).toBe(
      6,
    );
  });
});
