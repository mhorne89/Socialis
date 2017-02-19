// Node modules
var feed = require("feed-read");

// Modules
var connection = require("./connect");
var getRandomNumber = require("./getRandomNumber");
var addHashes = require("./addHashes");
var postToFacebook = require("./postToFacebook");
var postToTwitter = require("./postToTwitter");
var postToLinkedin = require("./postToLinkedin");

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
    postToLinkedin.post(body);
  });
};