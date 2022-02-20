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

function mergeNodes(head: ListNode | null): ListNode | null {
  let dummy = head;
  let temp = head;
  let sum = 0;
  while (dummy && dummy.next) {
    if (dummy.next.val !== 0) {
      sum += dummy.next.val;
    } else {
      dummy.val = sum;
      temp.next = dummy;
      temp = temp.next;
      sum = 0;
    }
    dummy = dummy.next;
  }
  head = head.next;
  dummy = head;
  while (dummy && dummy.next) {
    if (dummy.next.val === 0) {
      dummy.next = null;
    }
    dummy = dummy.next;
  }
  return head;
}
