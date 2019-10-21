// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === '[') {
    var res = [];
    var temp = json.substring(1, json.length - 1).split(', ');
    for (var i = 0; i < temp.length; i++) {
      res.push(parseJSON(temp[i]));
    }
  } else if (json[0] === '{') {
    var res = {};
    var temp = json.substring(1, json.length - 1);
  } else if (json[0] === '"') {
    var res = '';
  }
  return res;
};
