import hardestWorker from './2432.the-employee-that-worked-on-the-longest-task';

describe('2432. The Employee That Worked on the Longest Task', () => {
  test('1', () => {
    expect(
      hardestWorker(10, [
        [0, 3],
        [2, 5],
        [0, 9],
        [1, 15],
      ]),
    ).toBe(1);
  });

  test('2', () => {
    expect(
      hardestWorker(26, [
        [1, 1],
        [3, 7],
        [2, 12],
        [7, 17],
      ]),
    ).toBe(3);
  });

  test('3', () => {
    expect(
      hardestWorker(2, [
        [0, 10],
        [1, 20],
      ]),
    ).toBe(0);
  });
});
