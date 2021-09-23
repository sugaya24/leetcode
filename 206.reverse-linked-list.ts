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

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return head;
  const arr = [];
  while (head !== null) {
    arr.push(head);
    head = head.next;
  }
  let cur = new ListNode();
  head = cur;
  while (arr.length > 0) {
    cur.next = arr.pop();
    cur = cur.next;
  }
  cur.next = null;
  return head.next;
}
