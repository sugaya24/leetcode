import categorizeBox from './2525.categorize-box-according-to-criteria';

describe('2525. Categorize Box According to Criteria', () => {
  test('1', () => {
    expect(categorizeBox(1000, 35, 700, 300)).toBe('Heavy');
  });

  test('2', () => {
    expect(categorizeBox(200, 50, 800, 50)).toBe('Neither');
  });

  test('3', () => {
    expect(categorizeBox(2909, 3968, 3272, 727)).toBe('Both');
  });
});
