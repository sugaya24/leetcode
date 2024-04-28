import numberOfSpecialChars from "./a";

describe("100294. Count the Number of Special Characters I", () => {
  test("Test 1", () => {
    expect(numberOfSpecialChars("aaAbcBC")).toBe(3);
  });
  test("Test 2", () => {
    expect(numberOfSpecialChars("abc")).toBe(0);
  });
  test("Test 3", () => {
    expect(numberOfSpecialChars("abBCab")).toBe(1);
  });
  test("Test 4", () => {
    expect(numberOfSpecialChars("CCc")).toBe(1);
  });
});
