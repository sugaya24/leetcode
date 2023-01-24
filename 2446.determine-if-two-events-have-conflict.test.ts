import haveConflict from './2446.determine-if-two-events-have-conflict';

describe('2446. Determine if Two Events Have Conflict', () => {
  test('1', () => {
    expect(haveConflict(['01:15', '02:00'], ['02:00', '03:00'])).toBe(true);
  });

  test('2', () => {
    expect(haveConflict(['01:00', '02:00'], ['01:20', '03:00'])).toBe(true);
  });

  test('3', () => {
    expect(haveConflict(['10:00', '11:00'], ['14:00', '15:00'])).toBe(false);
  });

  test('4', () => {
    expect(haveConflict(['15:19', '17:56'], ['14:11', '20:02'])).toBe(true);
  });
});
