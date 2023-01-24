function haveConflict(event1: string[], event2: string[]): boolean {
  const e1Start =
    Number(event1[0].split(':')[0]) * 60 + Number(event1[0].split(':')[1]);
  const e1End =
    Number(event1[1].split(':')[0]) * 60 + Number(event1[1].split(':')[1]);
  const e2Start =
    Number(event2[0].split(':')[0]) * 60 + Number(event2[1].split(':')[1]);
  const e2End =
    Number(event2[1].split(':')[0]) * 60 + Number(event2[1].split(':')[1]);
  return (
    (e1Start <= e2Start && e2Start <= e1End) ||
    (e1Start <= e2End && e2End <= e1End) ||
    (e2Start <= e1Start && e1End <= e2End)
  );
}

export default haveConflict;
