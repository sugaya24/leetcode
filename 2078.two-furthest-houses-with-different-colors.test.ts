import maxDistance from './2078.two-furthest-houses-with-different-colors';

test(`0`, () => {
  expect(maxDistance([1, 1, 1, 6, 1, 1, 1])).toBe(3);
});
test(`1`, () => {
  expect(maxDistance([1, 8, 3, 8, 3])).toBe(4);
});
test(`2`, () => {
  expect(maxDistance([0, 1])).toBe(1);
});
