class KthLargest {
  k: number;
  nums: number[];
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums;
  }

  add(val: number): number {
    this.nums.push(val);
    const sorted = this.nums.sort((a, b) => b - a);
    return sorted[this.k - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const kthLargestNumber = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargestNumber.add(3));
console.log(kthLargestNumber.add(5));
console.log(kthLargestNumber.add(10));
console.log(kthLargestNumber.add(9));
console.log(kthLargestNumber.add(4));
