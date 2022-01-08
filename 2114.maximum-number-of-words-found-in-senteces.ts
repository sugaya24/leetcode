export function mostWordsFound(sentences: string[]): number {
  let maxLength = 0;
  sentences.forEach((sentence) => {
    maxLength = Math.max(maxLength, sentence.split(` `).length);
  });
  return maxLength;
}
