/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
function busyStudent(startTime, endTime, queryTime) {
  let count = 0;
  const len = startTime.length;
  for (let i = 0; i < len; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) count++;
  }
  return count;
}

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
console.log(
  busyStudent(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10],
    5
  )
);
