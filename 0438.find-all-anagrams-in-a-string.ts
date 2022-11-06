function findAnagrams(s: string, p: string): number[] {
  let sLen = s.length;
  let pLen = p.length;
  const res: number[] = [];

  let sArr = new Array(26).fill(0);
  let pArr = new Array(26).fill(0);

  for (let i = 0; i < pLen; i++) {
    sArr[s.charCodeAt(i) - 97]++;
    pArr[p.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < sLen; i++) {
    if (isAnagram(sArr, pArr)) {
      res.push(i);
    }
    sArr[s.charCodeAt(i) - 97]--;
    sArr[s.charCodeAt(i + pLen) - 97]++;
  }

  return res;
}

function isAnagram(arr1: number[], arr2: number[]) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

export default findAnagrams;
