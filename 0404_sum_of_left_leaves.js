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
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    if (node.left && !node.left.left && !node.left.right) sum += node.left.val;
  }
  traverse(root);
  return sum;
};
