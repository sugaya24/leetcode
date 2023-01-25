function isCircularSentence(sentence: string): boolean {
  if (sentence[0] !== sentence[sentence.length - 1]) return false;
  const words = sentence.split(' ');
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i][words[i].length - 1] !== words[i + 1][0]) return false;
  }
  return true;
}

export default isCircularSentence;
