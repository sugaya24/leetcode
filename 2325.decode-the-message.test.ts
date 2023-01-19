import decodeMessage from './2325.decode-the-message';

describe('2325. Decode the Message', () => {
  test('1', () => {
    expect(
      decodeMessage(
        'the quick brown fox jumps over the lazy dog',
        'vkbs bs t suepuv',
      ),
    ).toBe('this is a secret');
  });

  test('2', () => {
    expect(
      decodeMessage(
        'eljuxhpwnyrdgtqkviszcfmabo',
        'zwx hnfx lqantp mnoeius ycgk vcnjrdb',
      ),
    ).toBe('the five boxing wizards jump quickly');
  });
});
