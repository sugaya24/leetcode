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
    const plusIndex = email.indexOf('+');
    const atIndex = email.indexOf('@');
    if (plusIndex >= 0) {
      email =
        email.slice(0, plusIndex).replace(/\./g, '') +
        email.slice(atIndex, email.length);
    } else {
      email =
        email.slice(0, atIndex).replace(/\./g, '') +
        email.slice(atIndex, email.length);
    }
    if (!set.has(email)) set.add(email);
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
