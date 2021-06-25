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

function swapPairs(head: ListNode | null): ListNode | null {
  // dummyとcurの準備
  let dummy = new ListNode(-1);
  dummy.next = head;
  let cur = dummy;
  while (head && head.next) {
    let n1 = head;
    let n2 = head.next;
    cur.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    cur = n1;
    head = n1.next;
  }
  return dummy.next;
}
