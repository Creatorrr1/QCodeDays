const persistence = require('../CodeWars/js/persistentBugger.js');

// const chai = require('chai');
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

describe('Persistent Bugger.', () => {
  it('Fixed tests', () => {
    expect(persistence(39)).toEqual(3);
    expect(persistence(4)).toEqual(0);
    expect(persistence(25)).toEqual(2);
    expect(persistence(999)).toEqual(4);
    // assert.strictEqual(persistence(39), 3);
    // assert.strictEqual(persistence(4), 0);
    // assert.strictEqual(persistence(25), 2);
    // assert.strictEqual(persistence(999), 4);
  });
});