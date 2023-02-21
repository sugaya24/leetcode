import topKFrequent from './0347.top-k-frequent-elements';

describe('347. Top K Frequent Elements', () => {
  test('1', () => {
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
    const expected: number[] = [1, 2];
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });

  test('2', () => {
    const result = topKFrequent([1], 1);
    const expected: number[] = [1];
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });
});
