// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var temp = [];
    for (var i = 0; i < obj.length; i++) {
      temp.push(stringifyJSON(obj[i]));
    }
    return '[' + temp.join(',') + ']';
  }
  if (typeof obj === 'object' && obj) {
    var temp = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === undefined) {
        return '{}';
      }
      temp.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + temp.join(',') + '}';
  }
  return '' + obj;

};
