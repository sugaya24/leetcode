/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  let max = 0;
  dfs(root);
  return max;
  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    let leftNode = dfs(node.left);
    let rightNode = dfs(node.right);
    max = Math.max(max, leftNode + rightNode);
    return Math.max(leftNode, rightNode) + 1;
  }
}
