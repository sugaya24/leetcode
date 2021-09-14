function partitionLabels(s: string): number[] {
  // 二度目以降同じ文字が出てきたら最初と同じグループに属する
  // mapに出現回数をを一旦全て保存
  // 今の部分の出現回数をmapに入れていって、keyがあるものに関してvalueの値が全て同じになればそこで分けても良い
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  // 文字列の頭からpartition用のmapを用意しながら比較していく
  // いつpartitionが更新されるのか
  // まだpartitionがないか、区切れた直後
  let partition = new Map();
  let flag = false;
  let count = 0;
  const ans = [];
  for (let i = 0; i < s.length; i++) {
    partition.set(s[i], (partition.get(s[i]) || 0) + 1);
    count++;
    for (const [key, value] of partition) {
      // 一つのkeyについて同じなら何もしない
      // 全てのkeyについて同じだった場合 => flagはtrue
      // 違ったらその回のforは抜けて良い => flagはfalseのまま
      if (map.get(key) !== value) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    if (flag) {
      ans.push(count);
      partition = new Map();
      flag = false;
      count = 0;
    }
  }
  return ans;
}

console.log(partitionLabels('ababcbacadefegdehijhklij'));
console.log(partitionLabels('eccbbbbdec'));
