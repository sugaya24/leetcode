function bestHand(ranks: number[], suits: string[]): string {
  const TYPES = ['Flush', 'Three of a Kind', 'Pair', 'High Card'];
  const setSuits = new Set(suits);
  const mapRanks = new Map();
  let maxSameCards = 0;
  for (const r of ranks) {
    mapRanks.set(r, mapRanks.get(r) + 1 || 1);
    maxSameCards = Math.max(maxSameCards, mapRanks.get(r));
  }
  if (setSuits.size === 1) {
    return TYPES[0];
  } else if (maxSameCards >= 3) {
    return TYPES[1];
  } else if (maxSameCards >= 2) {
    return TYPES[2];
  }
  return TYPES[3];
}

export default bestHand;
