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

function partition(head: ListNode | null, x: number): ListNode | null {
  let l1 = new ListNode(-1),
    curL1 = l1,
    l2 = new ListNode(-1),
    curL2 = l2;
  while (head !== null) {
    if (head.val < x) {
      curL1.next = head;
      curL1 = curL1.next;
    } else {
      curL2.next = head;
      curL2 = curL2.next;
    }
    head = head.next;
  }
  curL2.next = null;
  curL1.next = l2.next;
  return l1.next;
}
