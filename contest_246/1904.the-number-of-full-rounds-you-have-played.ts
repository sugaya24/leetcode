function numberOfRounds(startTime: string, finishTime: string): number {
  let startH = parseInt(startTime.substring(0, 2)),
    startM = parseInt(startTime.substring(3)),
    finishH = parseInt(finishTime.substring(0, 2)),
    finishM = parseInt(finishTime.substring(3)),
    ans = 0,
    addition = 0,
    startInMin: number,
    finishInMin: number;
  if (finishH < startH || (finishH === startH && finishM < startM)) {
    //Add 24*60 minutes if finish time is less than start time
    addition = 24 * 60;
  }
  startInMin = startH * 60 + startM;
  finishInMin = finishH * 60 + finishM + addition;
  // 最初の15区切りの地点までcount++でループ
  // それ以降は+15でカウントする
  let i = startInMin,
    flag = false;
  while (true) {
    if (i % 15 === 0 || flag) {
      i += 15;
      ans++;
      flag = true;
    } else {
      i++;
    }
    if (i > finishInMin) break;
  }
  return ans === 0 || ans === 1 ? 0 : ans - 1;
}

console.log(numberOfRounds('00:00', '00:35')); // 2
console.log(numberOfRounds('00:00', '03:00')); // 12
console.log(numberOfRounds('20:00', '06:00')); // 40
console.log(numberOfRounds('00:00', '23:59')); // 95
console.log(numberOfRounds('12:34', '01:20')); // 50
console.log(numberOfRounds('01:45', '15:19')); // 54
console.log(numberOfRounds('00:47', '00:57')); // 0
console.log(numberOfRounds('09:00', '09:58')); // 3
console.log(numberOfRounds('20:30', '03:10')); // 26
console.log(numberOfRounds('15:19', '01:45')); // 41
