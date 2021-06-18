/**
 * @param {string} text
 * @return {string}
 */
function arrangeWords(text) {
  text = text.toLowerCase().split(' ');
  const asc = text.sort((a, b) => a.length - b.length).join(' ');
  const ans = asc.charAt(0).toUpperCase() + asc.slice(1);
  return ans;
}

// console.log(arrangeWords('Leetcode is cool'));
// console.log(arrangeWords('Keep calm and code on'));
// console.log(arrangeWords('To be or not to be'));
console.log(
  arrangeWords(
    'Jtik hrzrvhbmk gbo cfhmiqwonj ojkew ufvledv bomoeqt ops jgi zdhvbpbb zczmepdfpm jry rjazc titttcu'
  )
);
