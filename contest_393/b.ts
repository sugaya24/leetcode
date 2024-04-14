function maximumPrimeDifference(nums: number[]): number {
  let minPrimeIndex = Infinity;
  let maxPrimeIndex = 0;
  for (const [i, num] of nums.entries()) {
    if (isPrime(num)) {
      minPrimeIndex = Math.min(minPrimeIndex, i);
      maxPrimeIndex = Math.max(maxPrimeIndex, i);
    }
  }
  return Math.abs(maxPrimeIndex - minPrimeIndex);
}

function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export { maximumPrimeDifference };
