/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    const wealth = accounts[i].reduce((acc, cur) => acc + cur, 0);
    if (wealth > maxWealth) maxWealth = wealth;
  }
  return maxWealth;
};
