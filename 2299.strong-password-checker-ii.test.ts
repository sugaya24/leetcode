import strongPasswordCheckerII from './2299.strong-password-checker-ii';

describe('2299. Strong Password Checker II', () => {
  test('1', () => {
    expect(strongPasswordCheckerII('IloveLe3tcode!')).toBe(true);
  });
  test('2', () => {
    expect(strongPasswordCheckerII('Me+You--IsMyDream')).toBe(false);
  });
  test('3', () => {
    expect(strongPasswordCheckerII('1aB!')).toBe(false);
  });
  test('3', () => {
    expect(
      strongPasswordCheckerII(
        'yvTY#@IB#*!hjrQt-TLW&z)$@!%Duqt&ToskxHgnybqpndMI+wP&fcemIk#@KnkMTaUkcIbncpTL',
      ),
    ).toBe(false);
  });
});
