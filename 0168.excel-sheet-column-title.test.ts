import convertToTitle from './0168.excel-sheet-column-title';

describe('168. Excel Sheet Column Title', () => {
  test('1', () => {
    expect(convertToTitle(1)).toBe('A');
  });
  test('2', () => {
    expect(convertToTitle(28)).toBe('AB');
  });
  test('3', () => {
    expect(convertToTitle(701)).toBe('ZY');
  });
  test('4', () => {
    expect(convertToTitle(703)).toBe('AAA');
  });
});
