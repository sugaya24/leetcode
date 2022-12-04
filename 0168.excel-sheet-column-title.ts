function convertToTitle(columnNumber: number): string {
  let res = '';
  while (columnNumber > 0) {
    let r = columnNumber % 26;
    let d = Math.floor(columnNumber / 26);
    if (r === 0) {
      r = 26;
      d = d - 1;
    }
    res = String.fromCharCode(64 + r) + res;
    columnNumber = d;
  }
  return res;
}

export default convertToTitle;
