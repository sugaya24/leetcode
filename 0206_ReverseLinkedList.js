/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var newHead = null;
  var tmp = null;
  while (head !== null) {
    tmp = head;
    head = head.next;
    tmp.next = newHead;
    newHead = tmp;
  }
  return newHead;
};
