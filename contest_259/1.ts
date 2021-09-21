function finalValueAfterOperations(operations: string[]): number {
  let count = 0;
  operations.forEach((operation) => {
    if (operation.indexOf('+') !== -1) {
      count++;
    } else {
      count--;
    }
  });
  return count;
}

console.log(finalValueAfterOperations(['--X', 'X++', 'X++']));
console.log(finalValueAfterOperations(['++X', '++X', 'X++']));
console.log(finalValueAfterOperations(['X++', '++X', '--X', 'X--']));
