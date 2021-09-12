function reversePrefix(word: string, ch: string): string {
  // const arr = word.split('');
  const ans = [];
  const firstChIndex = word.indexOf(ch);
  for (let i = firstChIndex; i >= 0; i--) {
    ans.push(word[i]);
  }
  for (let i = firstChIndex + 1; i < word.length; i++) {
    ans.push(word[i]);
  }
  return ans.join('');
}

// console.log(reversePrefix('abcdefd', 'd'));
// console.log(reversePrefix('xyxzxe', 'z'));
// console.log(reversePrefix('abcd', 'z'));
