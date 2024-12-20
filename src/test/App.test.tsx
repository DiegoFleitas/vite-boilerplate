import { parseInput } from '../app/utils';

describe('parseInput', () => {
  it('should parse movie titles correctly', () => {
    const input1 = 'kill bill';
    expect(parseInput(input1)).toEqual('kill bill');
  });
});
