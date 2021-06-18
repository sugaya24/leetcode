function isPerfectSquare(num) {
  for (let i = 1; i ** 2 <= num; i++) {
    if (i ** 2 === num) return true;
  }
  return false;
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
