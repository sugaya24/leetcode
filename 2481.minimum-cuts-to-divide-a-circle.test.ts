import numberOfCuts from './2481.minimum-cuts-to-divide-a-circle';

describe('2481. Minimum Cuts to Divide a Circle', () => {
  test('1', () => {
    expect(numberOfCuts(4)).toBe(2);
  });

  test('2', () => {
    expect(numberOfCuts(3)).toBe(3);
  });
});
