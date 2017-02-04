// Node modules
var feed = require("feed-read");

// Modules
var connection = require("./modules/connect");
var getRandomNumber = require("./modules/getRandomNumber");
var addHashes = require("./modules/addHashes");
var postToFacebook = require("./modules/postToFacebook");
var postToTwitter = require("./modules/postToTwitter");

module.exports = function() {
  connection.query('SELECT * FROM articles', function(err, result) {
    if (err) console.log(err);

    var rand = getRandomNumber(result.length);

    var body = {
      'title': result[rand].title,
      'link': result[rand].link
    };

    // Add hastags to title
    body.title = addHashes(body.title);

    postToFacebook.post(body);
    postToTwitter.post(body);
  });
};