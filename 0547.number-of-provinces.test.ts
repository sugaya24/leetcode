import findCircleNum from './0547.number-of-provinces';

describe('547. Number of Provinces', () => {
  test('1', () => {
    expect(
      findCircleNum([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(2);
  });
  test('2', () => {
    expect(
      findCircleNum([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(3);
  });
  test('3', () => {
    expect(
      findCircleNum([
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 1],
        [1, 0, 1, 1],
      ]),
    ).toBe(1);
  });
  test('4', () => {
    expect(
      findCircleNum([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]),
    ).toBe(1);
  });
});
