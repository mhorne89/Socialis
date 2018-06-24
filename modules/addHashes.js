// Modules
const keywords = require("./keywords");

module.exports = (title) => {
  const wordArray = title.split(' ');

  for (i = 0; i < wordArray.length; ++i) {
    if (keywords.indexOf(wordArray[i].toLowerCase()) > -1)
      wordArray[i] = '#' + wordArray[i];
  };

  return wordArray.join(" ");
};