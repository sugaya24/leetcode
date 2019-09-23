/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // console.log(l1, l2);
  i = 0;
  array = [];
  while (l1.length > i && l2.length > i) {
    // l1とl2の長さがどちらもiを超えない場合
    // l1[i]とl2[i]をarrayにpushする
    array.push(l1[i], l2[i]);
    i++;
  }
  if (l1.length === i) {
    array = array.concat(l2.slice(i));
    console.log('hi');
  } else if (l2.length === i) {
    array = array.concat(l1.slice(i));
    console.log('hoiy');
  }
  return array;
};

console.log(mergeTwoLists([1, 2, 4, 1, 1], [1, 3, 4]));
