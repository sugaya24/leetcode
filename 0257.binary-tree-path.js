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
function binaryTreePaths(root) {
  const path = [];

  function dfs(node, currentPath) {
    // 存在しないノードの処理
    if (!node) return path;
    // ここまでの文字列を作る
    currentPath += node.val;
    // 末尾なら path.push してreturn
    if (!node.left && !node.right) {
      path.push(currentPath);
      return;
    }
    // そうでなければ左右呼び出し
    dfs(node.left, currentPath + '->');
    dfs(node.right, currentPath + '->');
  }
  dfs(root, '');

  return path;
}
