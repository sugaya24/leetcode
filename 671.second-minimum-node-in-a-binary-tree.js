/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function findSecondMinimumValue(root) {
  let arr = [];
  const inorder = (node) => {
    if (node) {
      inorder(node.left);
      arr.push(node.val);
      inorder(node.right);
    }
    return arr;
  };

  inorder(root);
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) return arr[i];
  }
  return -1;
}
// @lc code=end
