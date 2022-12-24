function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    if (token === '+') {
      stack.push(stack.pop()! + stack.pop()!);
    } else if (token === '-') {
      stack.push(-stack.pop()! + stack.pop()!);
    } else if (token === '*') {
      stack.push(stack.pop()! * stack.pop()!);
    } else if (token === '/') {
      stack.push(Math.trunc((1 / stack.pop()!) * stack.pop()!));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack[0];
}

export default evalRPN;
