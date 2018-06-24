// Node modules
const FB = require('fb');
const fb = new FB.Facebook();

// Modules
const mailError = require('./emailAlerts');

// Config
require('dotenv').config();

// Facebook access token
FB.setAccessToken(process.env.FACEBOOK_ACCESS_TOKEN);


exports.post = (body) => {
  FB.api(`${ process.env.FACEBOOK_ID }/feed`, 'post', { message: body.title, link: body.link }, (res) => {
    if(!res || res.error)
      return mailError('Error posting to Facebook', !res ? 'error occurred' : res.error);
  });
};