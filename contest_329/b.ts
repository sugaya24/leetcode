function sortTheStudents(score: number[][], k: number): number[][] {
  score.sort((s1, s2) => s2[k] - s1[k]);
  return score;
}

export default sortTheStudents;
