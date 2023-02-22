import productExceptSelf from './0238.product-of-array-except-self';

describe('238. Product of Array Except Self', () => {
  test('1', () => {
    const result = productExceptSelf([1, 2, 3, 4]);
    const excepted: number[] = [24, 12, 8, 6];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(excepted[i]);
    }
    expect(result.length).toBe(excepted.length);
  });

  test('2', () => {
    const result = productExceptSelf([-1, 1, 0, -3, 3]);
    const excepted: number[] = [0, 0, 9, 0, 0];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(excepted[i]);
    }
    expect(result.length).toBe(excepted.length);
  });

  test('3', () => {
    const result = productExceptSelf([0, 1]);
    const excepted: number[] = [1, 0];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(excepted[i]);
    }
    expect(result.length).toBe(excepted.length);
  });

  test('4', () => {
    const result = productExceptSelf([0, 0]);
    const excepted: number[] = [0, 0];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(excepted[i]);
    }
    expect(result.length).toBe(excepted.length);
  });

  test('5', () => {
    const result = productExceptSelf([0, 4, 0]);
    const excepted: number[] = [0, 0, 0];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(excepted[i]);
    }
    expect(result.length).toBe(excepted.length);
  });
});
