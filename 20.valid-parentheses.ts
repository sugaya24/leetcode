function isValid(s: string): boolean {
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  console.log(map);
  const arr = s.split('');
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(' || arr[i] === '{' || arr[i] === '[') {
      stack.push(arr[i]);
    } else {
      if (
        (arr[i] === ')' && stack[stack.length - 1] === '(') ||
        (arr[i] === '}' && stack[stack.length - 1] === '{') ||
        (arr[i] === ']' && stack[stack.length - 1] === '[')
      )
        stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
}

// console.log(isValid('()'));
// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
// console.log(isValid('([)]'));
// console.log(isValid('['));
// console.log(isValid('(])'));
