export function generateTheString(n: number): string {
  return n % 2 !== 0 ? 'a'.repeat(n) : 'a'.repeat(n - 1) + 'b';
}
