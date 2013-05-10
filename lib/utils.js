var crypto = require('crypto')
  , path = require('path');


/**
 * MD5 the given `str`.
 */
exports.md5 = function(str) {
  return crypto
    .createHash('md5')
    .update(str)
    .digest('hex');
};

/**
 * Imply "http://" for `url`.
 */
exports.url = function(url) {
  if (~url.indexOf('://')) return url;
  return 'http://' + url;
};

/**
 * Set defaults on obj if not set
 * defaults(obj, {a: 1, b: 2}, {c: 3})
 **/
exports.defaults = function(obj) {
  Array.prototype.slice.call(arguments, 1).forEach(function(source){
    if (source) {
      for (var prop in source) {
        if (obj[prop] == null) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}