// Node modules
const feed = require("feed-read");
const _ = require("lodash");
const scrape = require('html-metadata');

// Modules
const connection = require("../modules/connect");
const feeds = require("../modules/feeds");
const keywords = require("../modules/keywords");

module.exports = () => {
  _.forEach(feeds, (key) => {
    feed(key, (err, articles) => {
      if (err) return console.log(err);
      if (!articles) return;

      _.forEach(articles, (key, value) => {
        var body = _.pick(key, ['title', 'content', 'link']);

        _.forEach(keywords, (key, value) => {
          if (_.includes(body.title.toLowerCase(), ' ' + key + ' ')) {
            
            scrape(body.link).then((metadata) => {
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
            })
          }
        })
      })
    })
  })
}