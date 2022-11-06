import intervalIntersection from './0986.interval-list-intersections';

describe('986. Interval List Intersections', () => {
  test('1', () => {
    const result = intervalIntersection(
      [
        [0, 2],
        [5, 10],
        [13, 23],
        [24, 25],
      ],
      [
        [1, 5],
        [8, 12],
        [15, 24],
        [25, 26],
      ],
    );
    const expected = [
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25],
    ];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        expect(result[i][j]).toBe(expected[i][j]);
      }
    }
    expect(result.length).toBe(expected.length);
  });
  test('2', () => {
    const result = intervalIntersection(
      [
        [1, 3],
        [5, 9],
      ],
      [],
    );
    const expected: number[][] = [];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        expect(result[i][j]).toBe(expected[i][j]);
      }
    }
    expect(result.length).toBe(expected.length);
  });
});
