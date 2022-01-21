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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let copy = head;
  let ans = head;
  let count = 0;
  while (copy) {
    copy = copy.next;
    count++;
  }
  if (count === n) return head.next;
  while (count--) {
    if (count === n) {
      head.next = head.next.next;
      break;
    }
    head = head.next;
  }
  return ans;
}
