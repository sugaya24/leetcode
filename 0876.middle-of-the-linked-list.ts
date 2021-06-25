/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  const A = [head];
  while (A[A.length - 1].next !== null) {
    A.push(A[A.length - 1].next);
  }
  return A[Math.trunc(A.length / 2)];
}
