function decodeMessage(key: string, message: string): string {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const dict = new Map();
  let count = 0;
  for (const c of key) {
    if (c === ' ') continue;
    if (!dict.has(c)) {
      dict.set(c, ALPHABET[count]);
      count++;
    }
  }
  let output = '';
  for (const c of message) {
    output += dict.get(c) || ' ';
  }
  return output;
}

export default decodeMessage;
