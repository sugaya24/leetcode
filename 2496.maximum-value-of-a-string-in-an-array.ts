function maximumValue(strs: string[]): number {
  const nums = '0123456789';
  let max = 0;
  for (const str of strs) {
    let isNum = true;
    for (const c of str) {
      if (!nums.includes(c)) {
        isNum = false;
        break;
      }
    }
    max = Math.max(max, isNum ? Number(str) : str.length);
  }
  return max;
}

export default maximumValue;
