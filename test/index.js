var assert = require('assert');
var google = require('..');

describe('oauth-google', function() {
  it('should work', function() {
    assert(google({clientId: 'test'}).clientId === 'test');
  });
});