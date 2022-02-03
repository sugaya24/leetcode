export function minMovesToSeat(seats: number[], students: number[]): number {
  seats = seats.sort((a, b) => a - b);
  students = students.sort((a, b) => a - b);
  let moves = 0;
  seats.forEach((seat, i) => (moves += Math.abs(seat - students[i])));
  return moves;
}
