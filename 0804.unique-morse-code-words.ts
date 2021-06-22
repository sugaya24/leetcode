function uniqueMorseRepresentations(words: string[]): number {
  const morseTable = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const set = new Set();
  for (const word of words) {
    const strToMorse = [];
    for (let i = 0; i < word.length; i++) {
      const index = alphabet.split('').indexOf(word[i]);
      strToMorse.push(morseTable[index]);
    }
    set.add(strToMorse.join(''));
  }
  return set.size;
}

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
