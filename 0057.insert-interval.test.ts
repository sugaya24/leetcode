import insert from './0057.insert-interval';

describe('57. Insert Interval', () => {
  test('1', () => {
    const res = insert(
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5],
    );
    const expected = [
      [1, 5],
      [6, 9],
    ];
    res.forEach((n, i) => {
      expect(n[0]).toBe(expected[i][0]);
      expect(n[1]).toBe(expected[i][1]);
    });
    expect(res.length).toBe(expected.length);
  });
  test('2', () => {
    const res = insert(
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8],
    );
    const expected = [
      [1, 2],
      [3, 10],
      [12, 16],
    ];
    res.forEach((n, i) => {
      expect(n[0]).toBe(expected[i][0]);
      expect(n[1]).toBe(expected[i][1]);
    });
    expect(res.length).toBe(expected.length);
  });
});
