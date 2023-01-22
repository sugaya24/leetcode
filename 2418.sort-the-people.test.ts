import sortPeople from './2418.sort-the-people';

describe('2418. Sort the People', () => {
  test('1', () => {
    const result = sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]);
    const expected = ['Mary', 'Emma', 'John'];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });

  test('2', () => {
    const result = sortPeople(['Alice', 'Bob', 'Bob'], [155, 185, 150]);
    const expected = ['Bob', 'Alice', 'Bob'];
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(expected[i]);
    }
    expect(result.length).toBe(expected.length);
  });
});
