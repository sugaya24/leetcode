import closetTarget from './2515.shortest-distance-to-target-string-in-a-circular-array';

describe('2515. Shortest Distance to Target String in a Circular Array', () => {
  test('1', () => {
    expect(
      closetTarget(['hello', 'i', 'am', 'leetcode', 'hello'], 'hello', 1),
    ).toBe(1);
  });

  test('2', () => {
    expect(closetTarget(['a', 'b', 'leetcode'], 'leetcode', 0)).toBe(1);
  });

  test('3', () => {
    expect(closetTarget(['i', 'eat', 'leetcode'], 'ate', 0)).toBe(-1);
  });

  test('4', () => {
    expect(closetTarget(['a', 'b', 'c'], 'c', 2)).toBe(0);
  });

  test('5', () => {
    expect(
      closetTarget(
        [
          'hsdqinnoha',
          'mqhskgeqzr',
          'zemkwvqrww',
          'zemkwvqrww',
          'daljcrktje',
          'fghofclnwp',
          'djwdworyka',
          'cxfpybanhd',
          'fghofclnwp',
          'fghofclnwp',
        ],
        'zemkwvqrww',
        8,
      ),
    ).toBe(4);
  });
});
