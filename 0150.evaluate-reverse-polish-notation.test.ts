import evalRPN from './0150.evaluate-reverse-polish-notation';

describe('150. Evaluate Reverse Polish Notation', () => {
  test('1', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
  });

  test('2', () => {
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
  });

  test('3', () => {
    expect(
      evalRPN([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+',
      ]),
    ).toBe(22);
  });
});
