// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  if (!head?.next) {
    return head;
  }
  let slow = head;
  let fast = head;
  while (fast?.next && fast.next?.next) {
    slow = slow?.next!;
    fast = fast.next.next;
  }
  if (!fast?.next) {
    return slow;
  } else {
    return slow?.next;
  }
}
