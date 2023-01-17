function xorOperation(n: number, start: number): number {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result ^= start + i * 2;
  }
  return result;
}

export default xorOperation;
