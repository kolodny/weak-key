var key = require('./');
var expect = require('expect');

describe('weak-key', function() {
  it('generates a key for an object', function() {
    var obj = {};
    expect(key(obj)).toBeA('string');
  });

  it('generates the same key for the same object', function() {
    var obj = {};
    var key1 = key(obj);
    var key2 = key(obj);
    expect(key1).toEqual(key2);
  });

  it('generates the same key for the same object for non consecutive calls', function() {
    var obj = {};
    var key1 = key(obj);
    key({});
    var key2 = key(obj);
    expect(key1).toEqual(key2);
  });

  it('generates different keys for different objects', function() {
    var obj1 = {};
    var key1 = key(obj1);
    var obj2 = {};
    var key2 = key(obj2);
    expect(key1).toNotEqual(key2);
  });

});