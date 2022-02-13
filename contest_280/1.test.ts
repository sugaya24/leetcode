import { countOperations } from './1';

test('1', () => {
  expect(countOperations(2, 3)).toEqual(3);
});

test('2', () => {
  expect(countOperations(10, 10)).toEqual(1);
});
