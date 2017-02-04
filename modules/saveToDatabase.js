// Node modules
var feed = require("feed-read");
var _ = require("lodash");

// Modules
var connection = require("./connect");
var feeds = require("./feeds");
var keywords = require("./keywords");

module.exports = function() {
  _.forEach(feeds, function(key){
    feed(key, function(err, articles) {
      if (err) { console.log(err); return; }
      if (!articles) { return; }

      _.forEach(articles, function(key, value) {
        var body = _.pick(key, ['title', 'content', 'link']);

        _.forEach(keywords, function(key, value){
          if (_.includes(body.title.toLowerCase(), ' ' + key + ' ')) {
            connection.query('INSERT INTO articles SET ?', body, function(err, result) {if (err) console.log(err); });
          } ;
        });
      });

    });
  });

};