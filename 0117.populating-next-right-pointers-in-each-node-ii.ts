// @ts-nocheck
// class Node {
//   val: number;
//   left: Node | null;
//   right: Node | null;
//   next: Node | null;
//   constructor(val?: number, left?: Node, right?: Node, next?: Node) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//     this.next = next === undefined ? null : next;
//   }
// }

function connect(root: Node | null): Node | null {
  let curr = root;

  while (curr != null) {
    let start = null;
    let prev = null;

    while (curr != null) {
      if (start == null) {
        if (curr.left) start = curr.left;
        else if (curr.right) start = curr.right;

        prev = start;
      }

      if (prev != null) {
        if (curr.left && prev != curr.left) {
          prev = prev.next = curr.left;
        }
        if (curr.right && prev != curr.right) {
          prev = prev.next = curr.right;
        }
      }

      curr = curr.next;
    }

    curr = start;
  }

  return root;
}
