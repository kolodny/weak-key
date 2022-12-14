var map = new WeakMap();
var index = 0;

module.exports = weakKey;

function weakKey(obj) {
  var key = map.get(obj);
  if (!key) {
    key = 'weak-key-' + index++;
    map.set(obj, key);  
  }
  return key;
}