function minStoneSum(piles: number[], k: number): number {
  // 一番大きいpiles[i]を半分にして切り上げる
  // 毎回ソートしないようにする
  for (let i = 0; i < k; i++) {
    const aryMax = function (a: number, b: number) {
      return Math.max(a, b);
    };
    const max = piles.reduce(aryMax);
    const maxIndex = piles.indexOf(max);
    piles[maxIndex] = Math.ceil(piles[maxIndex] / 2);
  }
  return piles.reduce((acc, cur) => acc + cur, 0);
}

console.log(minStoneSum([5, 4, 9], 2));
console.log(minStoneSum([4, 3, 6, 7], 3));
