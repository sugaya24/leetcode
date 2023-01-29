function isStrictlyPalindromic(n: number): boolean {
  for (let i = 2; i <= n - 2; i++) {
    if (!isPalindrome(n.toString(i))) {
      return false;
    }
  }
  return true;
}

function isPalindrome(str: string) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

export default isStrictlyPalindromic;
