import { getConcatenation } from './1929.concatenation-of-array';

test('0', () => {
  const expectedArray = [1, 2, 1, 1, 2, 1];

  getConcatenation([1, 2, 1]).forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
});
test('1', () => {
  const expectedArray = [1, 3, 2, 1, 1, 3, 2, 1];

  getConcatenation([1, 3, 2, 1]).forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
});
