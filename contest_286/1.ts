function findDifference(nums1: number[], nums2: number[]): number[][] {
  const copyNums1 = nums1.filter((num) => !nums2.includes(num));
  const copyNums2 = nums2.filter((num) => !nums1.includes(num));
  return [[...new Set(copyNums1)], [...new Set(copyNums2)]];
}

export default findDifference;
