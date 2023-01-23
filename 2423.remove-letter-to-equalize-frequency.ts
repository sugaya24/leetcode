function equalFrequency(word: string): boolean {
  const map = new Map();
  for (const c of word) {
    map.set(c, map.get(c) + 1 || 1);
  }

  let avg = 0;
  for (const entry of map) {
    avg += entry[1];
  }

  if (avg / map.size === 1 || map.size === 1) {
    return true;
  }
  avg = Math.round(avg / map.size);

  let oneOff = false;
  for (const entry of map) {
    if (Math.abs(entry[1] - avg) > 1) {
      return false;
    } else if (Math.abs(entry[1] - avg) === 1) {
      if (oneOff === false) {
        oneOff = true;
      } else {
        return false;
      }
    }
  }

  return oneOff;
}

export default equalFrequency;
