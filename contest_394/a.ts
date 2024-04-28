function numberOfSpecialChars(word: string): number {
  const ans: string[] = [];
  for (let i = 0; i < word.length; i++) {
    // Uppdercase: 65-90
    if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) {
      if (word.indexOf(word[i].toLowerCase()) !== -1) {
        ans.push(word[i]);
      }
    }
  }
  return new Set(ans).size;
}

export default numberOfSpecialChars;
