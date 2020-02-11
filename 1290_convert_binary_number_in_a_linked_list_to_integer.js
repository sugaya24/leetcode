/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let decimal = 0;
  while (head) {
    decimal <<= 1;
    decimal += head.val;
    head = head.next;
  }
  return decimal;
};

console.log(getDecimalValue([1, 0, 1])); // 5
console.log(getDecimalValue([0])); // 0
console.log(getDecimalValue([1])); // 1
console.log(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])); // 18880
console.log(getDecimalValue([0, 0])); // 0

// [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// [0,0]
// [0]
// [1]
