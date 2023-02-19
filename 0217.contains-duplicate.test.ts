import containsDuplicate from './0217.contains-duplicate';

describe('217. Contains Duplicate', () => {
  test('1', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test('2', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test('3', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
