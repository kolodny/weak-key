var WeakMap = global.WeakMap || require('core-js/stable/weak-map');
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