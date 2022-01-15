/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

type TIsBadVersion = (version: number) => boolean;
type TSolution = (n: number) => number;

export const solution = function (isBadVersion: TIsBadVersion): TSolution {
  return function (n: number): number {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
