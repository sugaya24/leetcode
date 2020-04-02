/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const dummyHead = new TreeNode();
  let cur = dummyHead;
  const inOrder = (root) => {
    if (!root) return;
    // leftがなくなるまでみて、なければreturnされて一つづつ以下へ進む
    inOrder(root.left);
    cur.right = new TreeNode(root.val);
    cur = cur.right;
    inOrder(root.right);
  };
  inOrder(root);
  return dummyHead.right;
};

// @lc code=end
