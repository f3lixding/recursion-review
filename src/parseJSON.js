// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var isOpen = function(bracket) {
  if (bracket === '[' || bracket === '{') {
    return true;
  }
};

var openBrackets = {
  ']' : '[',
  '}' : '{',
};

var parseJSON = function(json) {
  // your code goes here
  // if (json[0] === '[') {
  //   var res = [];
  //   var temp = json.substring(1, json.length - 1);
  //   var tempString = '';
  //   var brackets = [];
  //   for (var i = 0; i < temp.length; i++) {
  //     if (isOpen(temp[i]) || temp[i] === '"') {
  //       if (brackets[brackets.length - 1] === '"') {
  //         brackets.pop();
  //       }
  //       brackets.push(temp[i]);
  //       tempString += temp[i];
  //     } else if (temp[i] === ']' || temp[i] === '}') {
  //       if (brackets[brackets.length - 1] === openBrackets[temp[i]]) {
  //         brackets.pop();
  //       }
  //       tempString += temp[i];
  //     } else if (temp[i] === ',' && !brackets.length) {
  //       res.push(parseJSON(tempString));
  //       tempString = '';
  //     }
  //   }
  //   if (!!tempString) {
  //     res.push(parseJSON(tempString));
  //   }
  //   return res;
  // } else if (json[0] === '"') {
  //   return json.substring(1, json.length -1 );
  // }
  var result = [];
  if (json[0] === '[') {
    var temp = json.substring(1, json.length - 1).split(', ');
    for (var i = 0; i < temp.length; i++) {
      if (!!parseInt(temp[i])) {
        result.push(parseInt(temp[i]));
      } else {
        result.push(temp[i]);
      }
    }
  }
};
