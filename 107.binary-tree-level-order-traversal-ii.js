/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
const levelOrderBottom = (root) => {
  if (!root) return [];
  const arr = [];
  dfs(root, arr);
  return arr;
};

const dfs = (tree, arr, count = 1) => {
  console.log('arr', arr);
  if (arr.length < count) {
    arr.unshift([tree.val]);
  } else {
    arr[arr.length - count].push(tree.val);
  }

  if (tree.left) dfs(tree.left, arr, count + 1);
  if (tree.right) dfs(tree.right, arr, count + 1);
};

// @lc code=end
