import {
  postorderTraversal,
  TreeNode,
} from './0145.binary-tree-postorder-traversal';

// [1,null,2,3]
const a = new TreeNode();
const b = new TreeNode();
const c = new TreeNode();
a.val = 1;
a.right = b;
b.val = 2;
b.left = c;
c.val = 3;

it('case 1', () => {
  const expected = [3, 2, 1];
  postorderTraversal(a).forEach((n, i) => {
    expect(n).toBe(expected[i]);
  });
  expect(postorderTraversal(a).length).toBe(3);
});
