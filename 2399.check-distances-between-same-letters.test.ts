import checkDistances from './2399.check-distances-between-same-letters';

describe('2399. Check Distances Between Same Letters', () => {
  test('1', () => {
    expect(
      checkDistances(
        'abaccb',
        [
          1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0,
        ],
      ),
    ).toBe(true);
  });

  test('2', () => {
    expect(
      checkDistances(
        'aa',
        [
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0,
        ],
      ),
    ).toBe(false);
  });
});
