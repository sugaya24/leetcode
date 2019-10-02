/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const even_list = [];
  const odd_list = [];
  for (let i = 0; i < A.length; i++) {
    const element = A[i];
    if (element % 2 == 0) {
      even_list.push(element);
    } else {
      odd_list.push(element);
    }
  }
  return even_list.concat(odd_list);
};

console.log(sortArrayByParity([3, 1, 2, 4]));
