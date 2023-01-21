import answerQueries from './2389.longest-subsequence-with-limited-sum';

describe('2389. Longest Subsequence With Limited Sum', () => {
  test('1', () => {
    const result = answerQueries([4, 5, 2, 1], [3, 10, 21]);
    const expected: number[] = [2, 3, 4];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(expected[i]);
    }
  });

  test('2', () => {
    const result = answerQueries([2, 3, 4, 5], [1]);
    const expected: number[] = [0];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(expected[i]);
    }
  });
});
