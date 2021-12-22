import findJudge from './0997.find-the-town-judge';

test(`0`, () => {
  expect(findJudge(2, [[1, 2]])).toBe(2);
});
test(`1`, () => {
  expect(
    findJudge(3, [
      [1, 3],
      [2, 3],
    ])
  ).toBe(3);
});
test(`2`, () => {
  expect(
    findJudge(3, [
      [1, 3],
      [2, 3],
      [3, 1],
    ])
  ).toBe(-1);
});
test(`3`, () => {
  expect(
    findJudge(3, [
      [1, 2],
      [2, 3],
    ])
  ).toBe(-1);
});
