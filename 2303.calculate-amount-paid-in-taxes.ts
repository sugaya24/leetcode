function calculateTax(brackets: number[][], income: number): number {
  let sum = 0;
  let prevDollars = 0;
  for (let i = 0; i < brackets.length; i++) {
    const dollars = brackets[i][0] - prevDollars;
    if (dollars < income) {
      sum += (dollars * brackets[i][1]) / 100;
      income -= dollars;
    } else {
      sum += (income * brackets[i][1]) / 100;
      break;
    }
    prevDollars = brackets[i][0];
  }
  return sum;
}

export default calculateTax;
