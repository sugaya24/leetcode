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

function evaluateTree(root: TreeNode | null): boolean {
  function dfs(node: TreeNode): boolean {
    if (node.val === 2) {
      return dfs(node.left) || dfs(node.right);
    }
    if (node.val === 3) {
      return dfs(node.left) && dfs(node.right);
    }
    return node.val === 1;
  }
  return dfs(root);
}
