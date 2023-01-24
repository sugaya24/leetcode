function haveConflict(event1: string[], event2: string[]): boolean {
  const [start1, end1] = event1;
  const [start2, end2] = event2;
  if (notEarlier(start1, start2)) {
    return notEarlier(end2, start1);
  } else {
    return notEarlier(end1, start2);
  }
}

function notEarlier(time1: string, time2: string): boolean {
  const min1 = Number(time1.slice(0, 2)) * 60 + Number(time1.slice(3));
  const min2 = Number(time2.slice(0, 2)) * 60 + Number(time2.slice(3));
  return min1 >= min2;
}

export default haveConflict;
