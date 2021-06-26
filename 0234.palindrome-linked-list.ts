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
  const arr: number[] = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  const midIndex = Math.floor(arr.length / 2);
  for (let i = 0; i <= midIndex; i++) {
    if (arr[arr.length - 1 - i] !== arr[i]) return false;
  }
  return true;
}
