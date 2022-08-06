import { search } from "./0704.binary-search";

test("0", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});
test("1", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});
test("2", () => {
  expect(search([5], 5)).toBe(0);
});
