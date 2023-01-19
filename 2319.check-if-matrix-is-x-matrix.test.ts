import checkXMatrix from './2319.check-if-matrix-is-x-matrix';

describe('2319. Check if Matrix Is X-Matrix', () => {
  test('1', () => {
    expect(
      checkXMatrix([
        [2, 0, 0, 1],
        [0, 3, 1, 0],
        [0, 5, 2, 0],
        [4, 0, 0, 2],
      ]),
    ).toBe(true);
  });
  test('2', () => {
    expect(
      checkXMatrix([
        [5, 7, 0],
        [0, 3, 1],
        [0, 5, 0],
      ]),
    ).toBe(false);
  });
});
