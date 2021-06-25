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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let A = head,
    B = head,
    K,
    temp;
  // Aはk番目までのlistNode
  for (let i = 1; i < k; i++) {
    A = A.next;
  }
  // KはAのコピー,kから最後までのlistNode
  K = A;
  // Aはk+1番目から最後までのlistNode
  A = A.next;
  // k+1番目から(A)と1番目から(B)を同時に見ていく
  while (A) {
    A = A.next;
    B = B.next;
  }
  temp = K.val; //[2,3,4,5]
  K.val = B.val; //[4,5]
  B.val = temp; //[2,3,4,5]
  return head;
}

// valのみ変更すれば、nextには影響を与えないためlinkは切れない

// A = Bの代入の時点では参照が渡されているため、片方のvalが変更されるともう片方も変更される
// B = nullのようにBそのものの変更は影響なし
// A = Bのあと、A = A.nextとなると、AとBのアドレスは別になるため、互いに影響を与えない
// あくまで中身(val)が変更されると影響を及ぼしあう

// function swapNodes(head: ListNode | null, k: number): ListNode | null {
//   head = [1,2,3,4,5]
// let A = head,B
// B = A
// B = null
// console.log(A,B)　// [1,2,3,4,5] null

//   --------------------------------------
// let A = head, B
// B = A
// B.val = 10
// console.log(A,B) //[10,2,3,4,5] [10,2,3,4,5]

// return null
// }
