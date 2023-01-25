import deleteGreatestValue from './2500.delete-greatest-value-in-each-row';

describe('2500. Delete Greatest Value in Each Row', () => {
  test('1', () => {
    expect(
      deleteGreatestValue([
        [1, 2, 4],
        [3, 3, 1],
      ]),
    ).toBe(8);
  });

  test('2', () => {
    expect(deleteGreatestValue([[10]])).toBe(10);
  });
});
