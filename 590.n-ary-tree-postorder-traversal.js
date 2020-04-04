/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const res = [];
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    if (!cur) continue;
    res.push(cur.val);
    stack.push(...cur.children);
  }
  return res.reverse();
};
// @lc code=end
