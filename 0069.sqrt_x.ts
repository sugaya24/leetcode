function mySqrt(x: number): number {
  for (let i = 0; i <= x; i++) {
    if (i ** 2 <= x && x < (i + 1) ** 2) {
      return i;
    }
  }
}

export default mySqrt;
