/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const res = new Map();
  for (const str of strs) {
    let tmp = str;
    tmp = tmp
      .split('')
      .sort()
      .join('');
    if (res.has(tmp)) {
      const arr = res.get(tmp);
      arr.push(str);
    } else {
      res.set(tmp, [str]);
    }
  }
  return [...res.values()];
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
