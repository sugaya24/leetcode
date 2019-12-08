/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let result = 0;
  let isExistOdd = false;
  const obj = {};
  for (let i = 0, j = s.length; i < j; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  for (const key of Object.keys(obj)) {
    if (obj[key] % 2 === 1) {
      result += obj[key] - 1;
      isExistOdd = true;
    } else {
      result += obj[key];
    }
  }
  return isExistOdd ? result + 1 : result;
};

console.log(longestPalindrome('abccccdd')); // 7
console.log(longestPalindrome('abbcccdddd')); // 9
console.log(longestPalindrome('aaaabbbb')); // 8
console.log(longestPalindrome('aaabbbcccc')); // 9
console.log(longestPalindrome('aaabbbaabb')); // 9
console.log(
  longestPalindrome(
    'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
  )
); // 983
