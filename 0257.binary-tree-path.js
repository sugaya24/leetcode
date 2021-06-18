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
 * @return {string[]}
 */
function binaryTreePaths(root, currentPath = '', path = []) {
  if (!root) return path;

  currentPath += root.val + '->';

  if (!root.left && !root.right) {
    path.push(currentPath.slice(0, currentPath.length - 2));
  } else {
    binaryTreePaths(root.left, currentPath, path);
    binaryTreePaths(root.right, currentPath, path);
  }

  return path;
}
