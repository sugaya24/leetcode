function convertTime(current: string, correct: string): number {
  let count = 0;
  const currentHH = Number(current.split(':')[0]);
  const currentMM = Number(current.split(':')[1]);
  const correctHH = Number(correct.split(':')[0]);
  const correctMM = Number(correct.split(':')[1]);
  count += correctHH - currentHH;
  let diff = correctMM - currentMM;
  if (correctMM < currentMM) {
    count -= 1;
    diff += 60;
  }
  if (diff >= 15) {
    count += Math.floor(diff / 15);
    diff = diff % 15;
  }
  if (diff >= 5) {
    count += Math.floor(diff / 5);
    diff = diff % 5;
  }
  if (diff > 0) {
    count += diff;
  }
  return count;
}

export default convertTime;
