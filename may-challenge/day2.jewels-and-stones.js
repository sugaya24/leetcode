const numJewelsInStones = (J, S) => {
  let count = 0;
  const map = new Map();
  for (let i = 0; i < S.length; i++) {
    map.set(S[i], (map.get(S[i]) || 0) + 1);
  }

  for (let i = 0; i < J.length; i++) {
    if (map.get(J[i])) count += map.get(J[i]);
  }

  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
