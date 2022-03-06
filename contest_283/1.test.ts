import { cellsInRange } from './1';

test('1', async () => {
  const expected = ['K1', 'K2', 'L1', 'L2'];
  cellsInRange('K1:L2').forEach((cell, i) => {
    expect(cell).toBe(expected[i]);
  });
  expect(cellsInRange('K1:L2').length).toBe(expected.length);
});

test('2', () => {
  const expected = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'];
  cellsInRange('A1:F1').forEach((cell, i) => {
    expect(cell).toBe(expected[i]);
  });
  expect(cellsInRange('A1:F1').length).toBe(expected.length);
});

test('3', () => {
  const expected = ['A2', 'B2', 'C2'];
  cellsInRange('A2:C2').forEach((cell, i) => {
    expect(cell).toBe(expected[i]);
  });
  expect(cellsInRange('A2:C2').length).toBe(expected.length);
});
