import applyOperations from './2460.apply-operations-to-an-array';

describe('2460. Apply Operations to an Array', () => {
  test('1', () => {
    const result = applyOperations([1, 2, 2, 1, 1, 0]);
    const expected = [1, 4, 2, 0, 0, 0];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });

  test('2', () => {
    const result = applyOperations([0, 1]);
    const expected = [1, 0];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });
});
