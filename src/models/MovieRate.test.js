import getRate from './MovieApi';

describe('getRate', () => {
  it('Should be an instance of Function', () => {
    expect(getRate).toBeInstanceOf(Function);
  });
});
