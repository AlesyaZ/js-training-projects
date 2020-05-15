import getMovies from './MovieApi';

describe('getMovies', () => {
  it('Should be an instance of Function', () => {
    expect(getMovies).toBeInstanceOf(Function);
  });
});
