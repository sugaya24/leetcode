/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumRootToLeaf(root, sum = '') {
  if (!root) return 0;
  const nextSum = sum + root.val;
  if (!root.left && !root.right) return parseInt(nextSum, 2);
  return sumRootToLeaf(root.left, nextSum) + sumRootToLeaf(root.right, nextSum);
}
// @lc code=end
