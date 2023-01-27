import minPartitions from './1689.partitioning-into-minimum-number-of-deci-binary-numbers';

describe('1689. Partitioning Into Minimum Number Of Deci-Binary Numbers', () => {
  test('1', () => {
    expect(minPartitions('32')).toBe(3);
  });

  test('2', () => {
    expect(minPartitions('82734')).toBe(8);
  });

  test('3', () => {
    expect(minPartitions('27346209830709182346')).toBe(9);
  });
});
