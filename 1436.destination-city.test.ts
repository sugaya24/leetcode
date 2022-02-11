import { destCity } from './1436.destination-city';

test('1', () => {
  expect(
    destCity([
      ['London', 'New York'],
      ['New York', 'Lima'],
      ['Lima', 'Sao Paulo'],
    ])
  ).toBe('Sao Paulo');
});

test('2', () => {
  expect(
    destCity([
      ['B', 'C'],
      ['D', 'B'],
      ['C', 'A'],
    ])
  ).toBe('A');
});

test('3', () => {
  expect(destCity([['A', 'Z']])).toBe('Z');
});
