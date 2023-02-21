import threeSum from './0015.3sum';

describe('15. 3Sum', () => {
  test('1', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    const exptectedArray = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    expect(result.length).toBe(exptectedArray.length);
  });
  test('2', () => {
    const result = threeSum([0, 1, 1]);
    const exptectedArray = [];
    expect(result.length).toBe(exptectedArray.length);
  });
  test('3', () => {
    const result = threeSum([0, 0, 0]);
    const exptectedArray = [[0, 0, 0]];
    expect(result.length).toBe(exptectedArray.length);
  });
  test('4', () => {
    const result = threeSum([0, 0, 0, 0]);
    const exptectedArray = [[0, 0, 0]];
    expect(result.length).toBe(exptectedArray.length);
  });
  test('5', () => {
    const result = threeSum([-1, 0, 1, 0]);
    const exptectedArray = [[-1, 0, 1]];
    expect(result.length).toBe(exptectedArray.length);
  });
});
