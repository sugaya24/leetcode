function countTime(time: string): number {
  const [hh, mm] = time.split(':');
  const [h1, h2] = hh.split('');
  const [m1, m2] = mm.split('');
  let count = 1;
  if (h1 === '?' && h2 === '?') {
    count *= 24;
  } else if (h1 === '?' && h2 !== '?') {
    if (+h2 > 3) {
      count *= 2;
    } else {
      count *= 3;
    }
  } else if (h1 !== '?' && h2 === '?') {
    if (+h1 === 2) {
      count *= 4;
    } else {
      count *= 10;
    }
  }
  if (m1 === '?') {
    count *= 6;
  }
  if (m2 === '?') {
    count *= 10;
  }
  return count;
}

export default countTime;
