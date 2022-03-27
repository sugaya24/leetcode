import findDifference from './1';

test('1', () => {
  const expected = [
    [1, 3],
    [4, 6],
  ];
  findDifference([1, 2, 3], [2, 4, 6]).forEach((item, i) => {
    item.forEach((num, j) => {
      expect(num).toBe(expected[i][j]);
    });
    expect(item.length).toBe(expected[i].length);
  });
});

test('2', () => {
  const expected = [[3], []];
  findDifference([1, 2, 3, 3], [1, 1, 2, 2]).forEach((item, i) => {
    item.forEach((num, j) => {
      expect(num).toBe(expected[i][j]);
    });
    expect(item.length).toBe(expected[i].length);
  });
});
