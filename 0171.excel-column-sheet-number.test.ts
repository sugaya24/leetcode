import { titleToNumber } from "./0171.excel-column-sheet-number";

it("case 1", () => {
  expect(titleToNumber("A")).toBe(1);
});
it("case 2", () => {
  expect(titleToNumber("AB")).toBe(28);
});
it("case 3", () => {
  expect(titleToNumber("ZY")).toBe(701);
});
it("case 4", () => {
  expect(titleToNumber("FXSHRXW")).toBe(2147483647);
});
