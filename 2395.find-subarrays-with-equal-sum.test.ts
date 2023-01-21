import findSubarrays from './2395.find-subarrays-with-equal-sum';

describe('2395. Find Subarrays With Equal Sum', () => {
  test('1', () => {
    expect(findSubarrays([4, 2, 4])).toBe(true);
  });

  test('2', () => {
    expect(findSubarrays([1, 2, 3, 4, 5])).toBe(false);
  });

  test('3', () => {
    expect(findSubarrays([0, 0, 0])).toBe(true);
  });
});
