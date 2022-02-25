import { finalPrices } from './1475.final-prices-with-a-special-discount-in-a-shop';

test('1', () => {
  const prices = [8, 4, 6, 2, 3];
  const expected = [4, 2, 4, 2, 3];
  finalPrices(prices).forEach((n, i) => {
    expect(n).toBe(expected[i]);
  });
  expect(finalPrices(prices).length).toBe(expected.length);
});

test('2', () => {
  const prices = [1, 2, 3, 4, 5];
  const expected = [1, 2, 3, 4, 5];
  finalPrices([1, 2, 3, 4, 5]).forEach((n, i) => {
    expect(n).toBe(expected[i]);
  });
  expect(finalPrices(prices).length).toBe(expected.length);
});

test('3', () => {
  const prices = [10, 1, 1, 6];
  const expected = [9, 0, 1, 6];
  finalPrices([10, 1, 1, 6]).forEach((n, i) => {
    expect(n).toBe(expected[i]);
  });
  expect(finalPrices(prices).length).toBe(expected.length);
});
