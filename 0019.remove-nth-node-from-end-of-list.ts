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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // dummy nodeを作る
  let dummy = new ListNode(-1);
  dummy.next = head;
  // runnerとwalkerを作る
  // runnerとwalkerのポインタはdummy(headの前)
  let runner = dummy,
    walker = dummy;
  // runnerをn+1まで進める
  for (let i = 1; i <= n + 1; i++) {
    runner = runner.next;
  }
  // runnerが最後のnodeに当たるまでrunnerとwalkerを進める
  while (runner !== null) {
    runner = runner.next;
    walker = walker.next;
  }
  // walker.nextにrunner.next.nextを入れる
  walker.next = walker.next.next;
  return dummy.next;
}
