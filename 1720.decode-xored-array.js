/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
function decode(encoded, first) {
  const res = [first];
  for (let i = 0; i < encoded.length; i++) {
    res.push(res[i] ^ encoded[i]);
  }
  return res;
}

console.log(decode([1, 2, 3], 1));
console.log(decode([6, 2, 7, 3], 4));
console.log(decode([6], 1)); // [1,7]
console.log(decode([0, 6], 5)); // [5,5,3]
