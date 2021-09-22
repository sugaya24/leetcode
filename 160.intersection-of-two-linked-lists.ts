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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null;
  let curA = headA;
  let curB = headB;
  while (curA !== curB) {
    if (curA === null) {
      curA = headB;
    } else {
      curA = curA.next;
    }
    if (curB === null) {
      curB = headA;
    } else {
      curB = curB.next;
    }
  }
  return curA;
}
