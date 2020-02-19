/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  const dummy = new TreeNode();
  let node = dummy;

  const traverse = (root) => {
    if (!root) return;
    traverse(root.left);
    node.right = root;
    node = node.right;
    node.left = null;
    traverse(root.right);
  };

  traverse(root);
  return dummy.right;
};

console.log(increasingBST([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9])); // [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
