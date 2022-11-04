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

function deleteDuplicatesFromSortedList2(
  head: ListNode | null,
): ListNode | null {
  let dummy = new ListNode();
  let pred = dummy;
  dummy.next = head;
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      pred.next = head.next;
    } else {
      if (pred.next) {
        pred = pred.next;
      }
    }
    head = head.next;
  }
  return dummy.next;
}
