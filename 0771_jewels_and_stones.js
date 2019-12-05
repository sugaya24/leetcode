/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jewels = J.split('');
  let count = 0;
  jewels.forEach(jewel => {
    for (let i = 0; i < S.length; i++) {
      if (jewel === S[i]) {
        count++;
      }
    }
  });
  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
