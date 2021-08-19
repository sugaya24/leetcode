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

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;
  // 参照入れてSetで探す
  const set = new Set();
  while (head.next) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }
  return false;
}
