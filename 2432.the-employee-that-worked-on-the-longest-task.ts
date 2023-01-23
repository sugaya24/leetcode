function hardestWorker(n: number, logs: number[][]): number {
  let hardestWorkerId = -1;
  let startTime = 0;
  let longestTime = 0;
  for (const [id, leaveTime] of logs) {
    const workingTime = leaveTime - startTime;
    startTime = leaveTime;
    if (
      workingTime > longestTime ||
      (workingTime === longestTime && id < hardestWorkerId)
    ) {
      longestTime = workingTime;
      hardestWorkerId = id;
    }
  }
  return hardestWorkerId;
}

export default hardestWorker;
