function minimumOperations(nums: number[]): number {
  const set = new Set(nums);
  if (set.has(0)) set.delete(0);
  return set.size;
}

export default minimumOperations;
