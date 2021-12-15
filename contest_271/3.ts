function minimumRefill(
  plants: number[],
  capacityA: number,
  capacityB: number
): number {
  // Alice waters left to right
  // Bob waters right to left
  // Check how much water Alice has -> if it's less than plants[left], refill then / if it's enough, reduce water for plants[left] and left++
  // Same to Bob
  // At the end it's necessary to check if both water is enough or not and if not, refill++
  // !!! THEY CAN REFILL THE WATERING CAN **INSTANTANEOUSLY**
  let left = 0,
    right = plants.length - 1,
    a = capacityA,
    b = capacityB,
    refill = 0;
  while (left < right) {
    if (a < plants[left]) {
      a = capacityA;
      refill++;
    }
    a -= plants[left];
    left++;
    if (b < plants[right]) {
      b = capacityB;
      refill++;
    }
    b -= plants[right];
    right--;
  }
  if (left === right && a < plants[left] && b < plants[right]) refill++;
  return refill;
}

// console.log(minimumRefill([2, 2, 3, 3], 5, 5)); // 1
// console.log(minimumRefill([2, 2, 3, 3], 3, 4)); // 2
// console.log(minimumRefill([5], 10, 8)); // 0
// console.log(minimumRefill([1, 2, 4, 4, 5], 6, 5)); // 2
// console.log(minimumRefill([2, 2, 5, 2, 2], 5, 5)); // 1
// console.log(minimumRefill([10, 10, 10, 1, 1, 1, 1, 1, 1], 10, 100)); // 3
// console.log(
//   minimumRefill(
//     [
//       726, 739, 934, 116, 643, 648, 473, 984, 482, 85, 850, 806, 146, 764, 156,
//       66, 186, 339, 985, 237, 662, 552, 800, 78, 617, 933, 481, 652, 796, 594,
//       151, 82, 183, 241, 525, 221, 951, 732, 799, 483, 368, 354, 776, 175, 974,
//       187, 913, 842,
//     ],
//     1439,
//     1207
//   )
// ); // 24
