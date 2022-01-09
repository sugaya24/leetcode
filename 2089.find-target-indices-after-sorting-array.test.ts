import { targetIndices } from './2089.find-target-indices-after-sorting-array';

test('0', () => {
  const expectedArray = [1, 2];
  targetIndices([1, 2, 5, 2, 3], 2).forEach((num, i) => {
    expect(num).toBe(expectedArray[i]);
  });
  expect(targetIndices([1, 2, 5, 2, 3], 2).length).toBe(expectedArray.length);
});

test('1', () => {
  const expectedArray = [3];
  targetIndices([1, 2, 5, 2, 3], 3).forEach((num, i) => {
    expect(num).toBe(expectedArray[i]);
  });
  expect(targetIndices([1, 2, 5, 2, 3], 3).length).toBe(expectedArray.length);
});

test('2', () => {
  const expectedArray = [4];
  targetIndices([1, 2, 5, 2, 3], 5).forEach((num, i) => {
    expect(num).toBe(expectedArray[i]);
  });
  expect(targetIndices([1, 2, 5, 2, 3], 5).length).toBe(expectedArray.length);
});
