import numSubarrayProductLessThanK from './0713.subarray-product-less-than-k';

describe('713. Subarray Product Less Than K', () => {
  test('1', () => {
    expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toBe(8);
  });
  test('1', () => {
    expect(numSubarrayProductLessThanK([1, 2, 3], 0)).toBe(0);
  });
});
