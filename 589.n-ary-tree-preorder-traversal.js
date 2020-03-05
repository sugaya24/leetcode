/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
  // recursive solution
  // if (!root) return [];
  // const helper = (node, list) => {
  //   if (!node.children) return list;
  //   list.push(node.val);
  //   console.log(node.children.length);
  //   for (let i = 0; i < node.children.length; i++) {
  //     helper(node.children[i], list);
  //   }
  //   return list;
  // };
  // return helper(root, []);

  // iterative solution 2
  // const stack = [];
  // const result = [];
  // if (!root) {
  //   return result;
  // }
  // stack.push(root);
  // while (stack.length) {
  //   const node = stack.pop();
  //   result.push(node.val);
  //   for (let i = node.children.length - 1; i >= 0; i--) {
  //     stack.push(node.children[i]);
  //   }
  // }
  // return result;

  // interative solution 2
  const stack = [];
  const result = [];
  if (!root) return result;
  stack.push(root);
  while (stack.length) {
    const node = stack.shift();
    result.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.unshift(node.children[i]);
    }
  }
  return result;
}
// @lc code=end
