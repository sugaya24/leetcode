function minNumberOfHours(
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[],
): number {
  let hours = 0;
  const N = energy.length;
  for (let i = 0; i < N; i++) {
    if (initialEnergy <= energy[i]) {
      const diff = energy[i] - initialEnergy;
      initialEnergy += diff + 1;
      hours += diff + 1;
    }
    if (initialExperience <= experience[i]) {
      const diff = experience[i] - initialExperience;
      initialExperience += diff + 1;
      hours += diff + 1;
    }
    initialEnergy -= energy[i];
    initialExperience += experience[i];
  }
  return hours;
}

export default minNumberOfHours;
