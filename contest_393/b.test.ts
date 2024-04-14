import { maximumPrimeDifference } from "./b";

describe("100265. Maximum Prime Difference", () => {
  test("1", () => {
    expect(maximumPrimeDifference([4, 2, 9, 5, 3])).toBe(3);
  });

  test("2", () => {
    expect(maximumPrimeDifference([4, 8, 2, 8])).toBe(0);
  });

  test("3", () => {
    expect(maximumPrimeDifference([2, 2])).toBe(1);
  });

  test("5", () => {
    expect(maximumPrimeDifference([1, 7])).toBe(0);
  });
});
