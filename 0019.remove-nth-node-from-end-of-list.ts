// Definition for singly-linked list.
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head.next;
  }
  let len = 1;
  let node = head;
  while (node.next) {
    node = node.next;
    len++;
  }
  if (len - n === 0) {
    return head.next;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let i = 1;
  while (head.next) {
    if (i === len - n) {
      head.next = head.next?.next;
    } else {
      head = head?.next;
    }
    i++;
  }
  return dummy.next;
}
