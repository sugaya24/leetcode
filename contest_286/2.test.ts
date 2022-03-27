import minDeletion from './2';

test('1', () => {
  expect(minDeletion([1, 1, 2, 3, 5])).toBe(1);
});

test('2', () => {
  expect(minDeletion([1, 1, 2, 2, 3, 3])).toBe(2);
});
