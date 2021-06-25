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

function swapPairs(head: ListNode | null): ListNode | null {
  // dummyとcurの準備
  let dummy = new ListNode(-1);
  dummy.next = head;
  let cur = dummy;
  // スワップするペアが存在するか確認
  // その間スワップを続ける
  while (cur.next !== null && cur.next.next !== null) {
    // スワップの準備
    let left = cur.next;
    let right = cur.next.next;
    // スワップ処理
    // 奇数ノードの前を偶数ノードにリンク
    cur.next = right;
    // 奇数ノードを次の奇数ノードにリンク
    left.next = right.next;
    // 偶数ノードを前の奇数ノードにリンク
    right.next = left;
    // スワップ処理が終わり次第、curを次の奇数に移動
    cur = cur.next.next;
  }
  return dummy.next;
}
