/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
const isSymmetric = (root) => {
  const queue = [];
  queue.push(root, root);
  while (queue.length > 0) {
    const node1 = queue.shift();
    const node2 = queue.shift();

    if (node1 === null && node2 === null) continue;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;

    queue.push(node1.left, node2.right);
    queue.push(node1.right, node2.left);
  }
  return true;
};
// @lc code=end
