import { minimumOperationsToMakeKPeriodic } from "./b";

describe("Minimum Number of Operations to Make Word K-Periodic", () => {
  test("test 1", () => {
    expect(minimumOperationsToMakeKPeriodic("leetcodeleet", 4)).toBe(1);
  });

  test("test 2", () => {
    expect(minimumOperationsToMakeKPeriodic("leetcoleet", 2)).toBe(3);
  });
});
