// It contains a minimum of 3 characters.
// It consists of the digits 0-9, and the uppercase and lowercase English letters. (Not necessary to have all of them.)
// It includes at least one vowel.
// It includes at least one consonant.

function isValid(word: string): boolean {
  if (word.length < 3) return false;
  const vowels = ["a", "e", "i", "o", "u"];
  let hasVowel = false;
  let hasConsonant = false;
  let hasNumber = false;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      hasVowel = true;
    } else if (
      (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) ||
      (word[i].charCodeAt(0) >= 97 && word[i].charCodeAt(0) <= 122)
    ) {
      hasConsonant = true;
    } else if (word[i].charCodeAt(0) >= 48 && word[i].charCodeAt(0) <= 57) {
      continue;
    } else {
      return false;
    }
  }
  return hasVowel && hasConsonant;
}
