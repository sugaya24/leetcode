import { moveZeroes } from './0283.move-zeros';

test('0', () => {
  const values = [0, 1, 0, 3, 12];
  const expectedArray = [1, 3, 12, 0, 0];
  moveZeroes(values);
  values.forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
  expect(values.length).toBe(expectedArray.length);
});

test('1', () => {
  const values = [0];
  const expectedArray = [0];
  moveZeroes(values);
  values.forEach((n, i) => {
    expect(n).toBe(expectedArray[i]);
  });
  expect(values.length).toBe(expectedArray.length);
});
