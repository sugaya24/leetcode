/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const set = new Set();
  for (let email of emails) {
    let [local, domain] = email.split('@');
    set.add(local.split('+')[0].replace(/\./g, '') + '@' + domain);
  }
  return set.size;
}
// @lc code=end

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
    'testemail@leetcode.com'
  ])
);

console.log(
  numUniqueEmails(['test.email+alex@leetcode.com', 'test.email@leetcode.com'])
);
