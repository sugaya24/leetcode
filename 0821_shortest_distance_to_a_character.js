/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
function shortestToChar(S, C) {
  const arr = S.split('');
  const res = Array(arr.length);
  const zeroIndex = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === C) {
      res[i] = 0;
      zeroIndex.push(i);
    }
  }

  const firstZero = res.indexOf(0);
  for (let i = 0; i < firstZero; i++) {
    res[i] = firstZero - i;
  }

  let dist = 1;
  let count = 0;
  let flag = true;
  for (let i = firstZero + 1; i < res.length; i++) {
    if (i === zeroIndex[count + 1]) {
      count++;
      dist = 1;
      continue;
    }

    let odd = false;
    if ((zeroIndex[count + 1] - zeroIndex[count] - 1) % 2 !== 0) odd = true;
    if (i <= Math.floor((zeroIndex[count] + zeroIndex[count + 1]) / 2)) {
      flag = true;
      res[i] = dist++;
      continue;
    } else if (i >= Math.floor((zeroIndex[count] + zeroIndex[count + 1]) / 2)) {
      if (odd && flag) {
        dist--;
        flag = false;
      }
      res[i] = --dist;
      continue;
    }

    if (zeroIndex[count] < i) res[i] = dist++;
  }
  return res;
}

console.log(shortestToChar('loveleetcode', 'e')); // [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
console.log(shortestToChar('aaba', 'b')); // [2, 1, 0, 1]
console.log(shortestToChar('cizokxcijwbyspcfcqws', 'c')); // [2, 1, 0, 1]
