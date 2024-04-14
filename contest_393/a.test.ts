import { findLatestTime } from "./a";

describe("100265. Maximum Prime Difference100265. Maximum Prime Difference", () => {
  test("1", () => {
    expect(findLatestTime("1?:?4")).toBe("11:54");
  });

  test("2", () => {
    expect(findLatestTime("0?:5?")).toBe("09:59");
  });

  test("3", () => {
    expect(findLatestTime("?3:12")).toBe("03:12");
  });
});
