function categorizeBox(
  length: number,
  width: number,
  height: number,
  mass: number,
): string {
  const type = {
    BULKY: 'Bulky',
    HEAVY: 'Heavy',
    BOTH: 'Both',
    NEITHER: 'Neither',
  };
  const VOLUME = length * width * height;
  if (
    (length >= 10 ** 4 ||
      width >= 10 ** 4 ||
      height >= 10 ** 4 ||
      VOLUME >= 10 ** 9) &&
    mass >= 100
  ) {
    return type.BOTH;
  } else if (
    length >= 10 ** 4 ||
    width >= 10 ** 4 ||
    height >= 10 ** 4 ||
    VOLUME >= 10 ** 9
  ) {
    return type.BULKY;
  } else if (mass >= 100) {
    return type.HEAVY;
  } else {
    return type.NEITHER;
  }
}

export default categorizeBox;
