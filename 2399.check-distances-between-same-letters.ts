function checkDistances(s: string, distance: number[]): boolean {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < distance.length; i++) {
    if (s.indexOf(ALPHABET[i]) === -1) continue;
    if (
      distance[i] !==
      s.lastIndexOf(ALPHABET[i]) - s.indexOf(ALPHABET[i]) - 1
    ) {
      return false;
    }
  }
  return true;
}

export default checkDistances;
