import makeStringsEqual from './c';

describe('6298. Apply Bitwise Operations to Make Strings Equal', () => {
  test('1', () => {
    expect(makeStringsEqual('1010', '0110')).toBe(true);
  });

  test('2', () => {
    expect(makeStringsEqual('11', '00')).toBe(false);
  });
});
