export function reverseWords(s: string): string {
  const splitS: string[][] = s.split(' ').map((str) => str.split(''));
  splitS.forEach((arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
      left++;
      right--;
    }
  });
  return splitS.map((arr) => arr.join('')).join(' ');
}
