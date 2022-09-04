const longest = require('../src/codeWars/twoToOne.js');

describe('longest', function () {
  it('Basic tests', function () {
    expect(longest('aretheyhere', 'yestheyarehere')).toEqual('aehrsty');

    expect(
      longest('loopingisfunbutdangerous', 'lessdangerousthancoding')
    ).toEqual('abcdefghilnoprstu');

    expect(longest('inmanylanguages', 'theresapairoffunctions')).toEqual(
      'acefghilmnoprstuy'
    );
  });
});