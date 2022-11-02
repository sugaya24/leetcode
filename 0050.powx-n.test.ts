import myPow from './0050.powx-n';

test('1', () => {
  expect(Number(myPow(2.0, 10).toFixed(5))).toBe(1024.0);
  expect(Number(myPow(2.1, 3).toFixed(5))).toBe(9.261);
  expect(Number(myPow(2.0, -2).toFixed(5))).toBe(0.25);
  expect(Number(myPow(0.44528, 0).toFixed(5))).toBe(1.0);
});
