/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  return leafGenerator(root1) === leafGenerator(root2);
};

function leafGenerator(root) {
  const nodes = [root];
  const leafs = [];
  while (nodes.length) {
    const node = nodes.pop();
    if (!node.left && !node.right) leafs.push(node.val);
    if (node.right) nodes.push(node.right);
    if (node.left) nodes.push(node.left);
  }
  return leafs.join('');
}
