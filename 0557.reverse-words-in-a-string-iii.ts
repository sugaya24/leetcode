export function reverseWords(s: string): string {
  const ansArray: string[] = [];
  s.split(' ').forEach((word) => {
    ansArray.push(reverseStr(word));
  });
  return ansArray.join(' ');
}

function reverseStr(s: string): string {
  const arr = s.split('');
  const len = arr.length;
  let l = 0;
  let r = len - 1;
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
  return arr.join('');
}
