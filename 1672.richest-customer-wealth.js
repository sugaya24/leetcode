/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  const maxWealth = Math.max(
    ...accounts.map((account) => account.reduce((acc, cur) => acc + cur), 0)
  );
  return maxWealth;
};
