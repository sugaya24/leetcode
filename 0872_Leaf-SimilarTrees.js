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
  return JSON.stringify(setSearch(root1)) === JSON.stringify(setSearch(root2));
};

const setSearch = node => {
  const arr = [];
  const search = node => {
    if (node.left) {
      search(node.left);
    }

    if (node.right) {
      search(node.right);
    }

    if (!node.left && !node.right) {
      arr.push(node.val);
    }
  };
  search(node);
  return arr;
};
