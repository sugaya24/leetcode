import { solution } from './0278.first-bad-version';

describe('#solution', () => {
  it('0', () => {
    const findFirstBadVersion = solution((version) => version >= 4);
    expect(findFirstBadVersion(5)).toBe(4);
  });
});
