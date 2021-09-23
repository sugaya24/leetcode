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
  function isPalindrome(head: ListNode | null): boolean {
    if (head.next === null) return true;
    let slow = head,
      fast = head;
    const stack = [];
    while (fast.next !== null && fast.next.next !== null) {
      stack.push(slow.val);
      slow = slow.next;
      fast = fast.next.next;
    }
    // is Even
    if (fast.next !== null) {
      stack.push(slow.val);
    }
    while (slow.next !== null) {
      slow = slow.next;
      if (stack.pop() !== slow.val) return false;
    }
    return true;
  }
}
