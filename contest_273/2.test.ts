import { executeInstructions } from './2';

test('0', () => {
  const expectArray = [1, 5, 4, 3, 1, 0];
  executeInstructions(3, [0, 1], 'RRDDLU').forEach((n, i) => {
    expect(n).toBe(expectArray[i]);
  });
});
test('1', () => {
  const expectArray = [4, 1, 0, 0];
  executeInstructions(2, [1, 1], 'LURD').forEach((n, i) => {
    expect(n).toBe(expectArray[i]);
  });
});
test('2', () => {
  const expectArray = [0, 0, 0, 0];
  executeInstructions(1, [0, 0], 'LRUD').forEach((n, i) => {
    expect(n).toBe(expectArray[i]);
  });
});
