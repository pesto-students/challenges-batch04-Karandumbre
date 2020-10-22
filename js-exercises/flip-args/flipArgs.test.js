// write your own test cases
import flipped from './flipArgs';

describe('Should Flip the Arguments', () => {
  it('Should log flipped arguments', () => {
    console.log = jest.fn();
    flipped(1, 2, 3, 4, 5, 6);
    expect(console.log).toHaveBeenCalledWith([6, 5, 4, 3, 2, 1]);
  });
});
