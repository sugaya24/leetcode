/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
function restoreString(s, indices) {
  const res = [];
  for (let i = 0; i < indices.length; i++) {
    res.push(s[indices.indexOf(i)]);
  }
  return res.join('');
}
