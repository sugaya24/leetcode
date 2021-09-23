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

function isPalindrome(head: ListNode | null): boolean {
  let cur = '',
    reverse = '';
  while (head) {
    cur += head.val;
    reverse = head.val + reverse;
    head = head.next;
  }
  return cur === reverse;
}
