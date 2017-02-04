// Node modules
var feed = require("feed-read");

// Modules
var connection = require("./modules/connect");
var feeds = require("./modules/feeds");

module.exports = function() {
  for (i = 0; i < feeds.length; i++) {
    feed(feeds[i], function(err, articles) {
      if (err) { console.log(err); return; }

      if (articles[i]) {
        for (i = 0; i < articles.length; i++) {
          var body = {
            'title': articles[i].title,
            'content': articles[i].content,
            'link': articles[i].link
          };

          connection.query('INSERT INTO articles SET ?', body, function(err, result) {
            if (err) console.log(err);
          });
        }
      }
    });
  }
};