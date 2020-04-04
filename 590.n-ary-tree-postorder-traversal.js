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
  helper(root);
  return res;

  function helper(node) {
    if (!node) return;
    for (const child of node.children) {
      helper(child);
    }
    res.push(node.val);
  }
};
// @lc code=end
