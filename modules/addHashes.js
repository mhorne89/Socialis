// Modules
var keywords = require("./modules/keywords");

module.exports = function() {
  var wordArray = title.split(' ');

  for (i = 0; i < wordArray.length; ++i) {
    if (keywords.indexOf(wordArray[i].toLowerCase()) > -1) {
      wordArray[i] = '#' + wordArray[i];
    }
  }

  return wordArray.join(" ");
};