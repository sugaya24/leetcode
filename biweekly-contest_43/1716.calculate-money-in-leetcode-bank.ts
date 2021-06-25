function totalMoney(n: number): number {
  let ans = 0,
    weeks = 1,
    count = 0;
  while (true) {
    for (let i = weeks; i < weeks + 7; i++) {
      ans += i;
      count++;
      if (count === n) return ans;
    }
    weeks++;
  }
}

console.log(totalMoney(4)); // 10
console.log(totalMoney(10)); // 37
console.log(totalMoney(20)); // 96
