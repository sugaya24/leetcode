import countAsterisks from './2315.count-asterisks';

describe('2315. Count Asterisks', () => {
  test('1', () => {
    expect(countAsterisks('l|*e*et|c**o|*de|')).toBe(2);
  });

  test('2', () => {
    expect(countAsterisks('iamprogrammer')).toBe(0);
  });

  test('3', () => {
    expect(countAsterisks('yo|uar|e**|b|e***au|tifu|l')).toBe(5);
  });
});
