import bestHand from './2347.best-poker-hand';

describe('2347. Best Poker Hand', () => {
  test('1', () => {
    expect(bestHand([13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a'])).toBe('Flush');
  });

  test('2', () => {
    expect(bestHand([4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c'])).toBe(
      'Three of a Kind',
    );
  });

  test('3', () => {
    expect(bestHand([10, 10, 2, 12, 9], ['a', 'b', 'c', 'a', 'd'])).toBe(
      'Pair',
    );
  });

  test('4', () => {
    expect(bestHand([2, 10, 7, 10, 7], ['a', 'b', 'a', 'd', 'b'])).toBe('Pair');
  });
});
