function numberOfRounds(startTime: string, finishTime: string): number {
  let playedRounds = 0;
  let [sh, sm]: number[] = startTime.split(':').map((t) => +t);
  let [fh, fm]: number[] = finishTime.split(':').map((t) => +t);
  // startTimeよりfinishTimeの方が早い場合
  if (fh < sh || (fh === sh && fm < sm)) {
    fh += 24;
  }
  // startHourとfinishHourが同じ場合
  if (sh === fh) {
    for (let i = sm; i <= fm; i++) {
      if (i === 0) playedRounds++;
      if (i === 15) playedRounds++;
      if (i === 30) playedRounds++;
      if (i === 45) playedRounds++;
    }
    playedRounds -= 1;
    if (playedRounds > 0) {
      return playedRounds;
    } else {
      return 0;
    }
  }
  // startHourとfinishHourが違う場合
  // fh - sh - 1 が間の時間
  // 間の時間は必ずラウンド * 4回プレイしているのでまずカウント
  playedRounds += (fh - sh - 1) * 4;
  if (sm === 0) {
    playedRounds += 4;
  } else if (0 < sm && sm < 15) {
    playedRounds += 3;
  } else if (15 <= sm && sm <= 30) {
    playedRounds += 2;
  } else if (30 <= sm && sm <= 45) {
    playedRounds++;
  }
  if (15 <= fm && fm < 30) {
    playedRounds++;
  } else if (30 <= fm && fm < 45) {
    playedRounds += 2;
  } else if (45 <= fm && fm <= 59) {
    playedRounds += 3;
  }

  return playedRounds;
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
