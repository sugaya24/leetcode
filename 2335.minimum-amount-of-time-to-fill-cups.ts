function fillCups(amount: number[]): number {
  let sec = 0;
  amount.sort((a, b) => b - a);
  while (amount[0] > 0) {
    if (amount[1] > 0) {
      amount[0]--;
      amount[1]--;
    } else {
      amount[0]--;
    }
    sec++;
    amount.sort((a, b) => b - a);
  }
  return sec;
}

export default fillCups;
