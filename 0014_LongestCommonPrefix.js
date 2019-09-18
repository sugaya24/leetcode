/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // let count;
  // // strsの配列の長さ分ループする
  // loop: for (let i = 0; i < strs.length; i++) {
  //   const element = strs[i];
  //   console.log(element);

  //   // strs[0]の長さ分ループする
  //   for (let j = 0; j < strs[0].length; j++) {
  //     // strsの配列の長さ分ループする
  //     for (let k = 0; k < strs.length; k++) {
  //       let element = strs[k][j];
  //       console.log(`${element}`);
  //     }
  //     if (true) {
  //     }
  //     console.log(`--------`);
  //   }
  // }

  let count = 0;
  if (strs.length) {
    // strs[0]の文字数分ループする
    loop: for (let i = 0; i < strs[0].length; i++) {
      // strsの長さ分ループする
      for (let j = 0; j < strs.length - 1; j++) {
        // str[j]の文字
        const element = strs[j][i];
        const nextElement = strs[j + 1][i];
        if (element != nextElement) {
          break loop;
        }
      }
      count++;
    }
    return strs[0].slice(0, count);
  } else {
    return '';
  }
};

// const strs = ['flower', 'flow', 'flight'];
const strs = [];
console.log(longestCommonPrefix(strs));
