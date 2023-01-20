import mergeSimilarItems from './2363.merge-similar-items';

describe('2363. Merge Similar Items', () => {
  test('1', () => {
    const result = mergeSimilarItems(
      [
        [1, 1],
        [4, 5],
        [3, 8],
      ],
      [
        [3, 1],
        [1, 5],
      ],
    );
    const expected = [
      [1, 6],
      [3, 9],
      [4, 5],
    ];
    for (let i = 0; i < result.length; i++) {
      expect(result[i][0]).toBe(expected[i][0]);
      expect(result[i][1]).toBe(expected[i][1]);
    }
    expect(result.length).toBe(expected.length);
  });

  test('2', () => {
    const result = mergeSimilarItems(
      [
        [1, 1],
        [3, 2],
        [2, 3],
      ],
      [
        [2, 1],
        [3, 2],
        [1, 3],
      ],
    );
    const expected = [
      [1, 4],
      [2, 4],
      [3, 4],
    ];
    for (let i = 0; i < result.length; i++) {
      expect(result[i][0]).toBe(expected[i][0]);
      expect(result[i][1]).toBe(expected[i][1]);
    }
    expect(result.length).toBe(expected.length);
  });

  test('3', () => {
    const result = mergeSimilarItems(
      [
        [1, 3],
        [2, 2],
      ],
      [
        [7, 1],
        [2, 2],
        [1, 4],
      ],
    );
    const expected = [
      [1, 7],
      [2, 4],
      [7, 1],
    ];
    for (let i = 0; i < result.length; i++) {
      expect(result[i][0]).toBe(expected[i][0]);
      expect(result[i][1]).toBe(expected[i][1]);
    }
    expect(result.length).toBe(expected.length);
  });
});
