import topKFrequent from './0347.top-k-frequent-elements';

describe('347. Top K Frequent Elements', () => {
  test('1', () => {
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
    const expected: number[] = [1, 2];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });

  test('2', () => {
    const result = topKFrequent([1], 1);
    const expected: number[] = [1];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });
});
