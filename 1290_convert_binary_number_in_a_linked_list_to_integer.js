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
    if (decimal === 0) {
      if (head.val === 1) decimal += 1;
      head = head.next;
      continue;
    }

    if (head.val === 1) {
      decimal = decimal << 1;
      decimal += 1;
    } else if (head.val === 0) {
      decimal = decimal << 1;
    }
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
