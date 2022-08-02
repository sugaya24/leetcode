export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];
  function traversal(node: TreeNode | null): void {
    if (!node) return;
    if (node.left) traversal(node.left);
    if (node.right) traversal(node.right);
    ans.push(node.val);
  }
  traversal(root);
  return ans;
}
