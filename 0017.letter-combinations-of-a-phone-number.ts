function letterCombinations(digits: string): string[] {
  if (digits === null || digits.length === 0) return [];

  const map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ]);

  const output: string[] = [];

  const backtrack = (i: number, curStr: string) => {
    if (curStr.length === digits.length) {
      output.push(curStr);
      return;
    }
    for (const char of map.get(digits[i])!) {
      backtrack(i + 1, curStr + char);
    }
  };

  backtrack(0, '');
  return output;
}

export default letterCombinations;
