function maximumUnits(boxTypes: number[][], truckSize: number): number {
  let units = 0,
    loadedBoxes = 0;
  // boxTypes[i][1]で大きい順にソート
  // 前から順番にtruckSizeに達するまでcount++
  const sortedBoxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sortedBoxTypes.length; i++) {
    for (let j = 0; j < sortedBoxTypes[i][0]; j++) {
      units += sortedBoxTypes[i][1];
      loadedBoxes++;
      if (loadedBoxes === truckSize) return units;
    }
  }
  return units;
}

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
); // 8
console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
); // 91
