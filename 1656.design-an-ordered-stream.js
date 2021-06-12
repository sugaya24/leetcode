/**
 * @param {number} n
 */
function OrderedStream(n) {
  this.history = [];
  this.ptr = 1;
}

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.history[idKey] = value;
  let output = [];
  while (true) {
    if (this.history[this.ptr]) {
      output.push(this.history[this.ptr]);
      this.ptr++;
    } else {
      break;
    }
  }
  return output;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
