// Node modules
const Twitter = require('twitter');

// Modules
const mailError = require('./emailAlerts');

// Config
require('dotenv').config();


exports.post = function(body) {
  const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
  });

  client.post('statuses/update', { status: `${ body.title }: ${ body.link }` },  (error, tweet, response) => {
    if(error) return mailError('Error posting to Twitter', error);
    console.log('Twitter: ', response.statusMessage);
  });
};