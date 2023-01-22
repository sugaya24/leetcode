import sortTheStudents from './b';

describe('6297. Sort the Students by Their Kth Score', () => {
  test('1', () => {
    const result = sortTheStudents(
      [
        [10, 6, 9, 1],
        [7, 5, 11, 2],
        [4, 8, 3, 15],
      ],
      2,
    );
    const expected = [
      [7, 5, 11, 2],
      [10, 6, 9, 1],
      [4, 8, 3, 15],
    ];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[0].length; j++) {
        expect(result[i][j]).toBe(expected[i][j]);
      }
    }
    expect(result.length).toBe(expected.length);
  });

  test('2', () => {
    const result = sortTheStudents(
      [
        [3, 4],
        [5, 6],
      ],
      0,
    );
    const expected = [
      [5, 6],
      [3, 4],
    ];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[0].length; j++) {
        expect(result[i][j]).toBe(expected[i][j]);
      }
    }
    expect(result.length).toBe(expected.length);
  });
});
