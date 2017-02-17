// Node modules
var feed = require("feed-read");
var _ = require("lodash");
var scrape = require('html-metadata');

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
            
            scrape(body.link).then(function(metadata){
              if (metadata.general.image) {
                body.image = metadata.general.image;
                connection.query('INSERT INTO articles SET ?', body, function(err, result) { if (err) { console.log(err); } else { console.log(result); } });
              } else if (metadata.openGraph.image) {
                body.image = metadata.openGraph.image.url;
                connection.query('INSERT INTO articles SET ?', body, function(err, result) { if (err) { console.log(err); } else { console.log(result); } });
              } else if (metadata.twitter.image) {
                body.image = metadata.twitter.image.src;
                connection.query('INSERT INTO articles SET ?', body, function(err, result) { if (err) { console.log(err); } else { console.log(result); } });
              }
            });
          } ;
        });
      });

    });
  });

};