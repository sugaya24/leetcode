function decode(encoded: number[], first: number): number[] {
  const arr: number[] = [first];
  let xor = first;
  for (const n of encoded) {
    arr.push(n ^ xor);
    xor ^= n;
  }
  return arr;
}

console.log(decode([1, 2, 3], 1)); // [1,0,2,1]
console.log(decode([6, 2, 7, 3], 4)); // [4,2,0,7,4]
