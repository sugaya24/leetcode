/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let depth = 0;
  for (const child of root.children) {
    depth = Math.max(depth, maxDepth(child));
  }
  return depth + 1;
};

console.log(maxDepth([1, null, 3, 2, 4, null, 5, 6])); // 3
console.log(
  maxDepth([
    1,
    null,
    2,
    3,
    4,
    5,
    null,
    null,
    6,
    7,
    null,
    8,
    null,
    9,
    10,
    null,
    null,
    11,
    null,
    12,
    null,
    13,
    null,
    null,
    14
  ])
); // 5
