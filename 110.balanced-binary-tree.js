/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
const isBalanced = (root) => {
  if (!root) return true;
  return (
    isBalanced(root.right) &&
    isBalanced(root.left) &&
    Math.abs(dfs(root.right) - dfs(root.left)) <= 1
  );
};
const dfs = (node, depth = 0) => {
  if (!node) return depth;
  return Math.max(dfs(node.right, depth + 1), dfs(node.left, depth + 1));
};

// @lc code=end
