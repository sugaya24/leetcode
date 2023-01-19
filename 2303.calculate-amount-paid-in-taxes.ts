function calculateTax(brackets: number[][], income: number): number {
  return brackets.reduce(
    ([tax, prev], [upper, percent]) => {
      const cur = Math.min(income, upper - prev);
      tax += cur * (percent / 100);
      income -= cur;
      if (income <= 0) {
        brackets.length = 0;
      }
      return [tax, upper];
    },
    [0, 0],
  )[0];
}

export default calculateTax;
