import addedInteger from "./a";

describe("100285. Find the Integer Added to Array I", () => {
  test("test 1", () => {
    expect(addedInteger([2, 6, 4], [9, 7, 5])).toBe(3);
  });
  test("test 2", () => {
    expect(addedInteger([10], [5])).toBe(-5);
  });
  test("test 3", () => {
    expect(addedInteger([1, 1, 1, 1], [1, 1, 1, 1])).toBe(0);
  });
});
