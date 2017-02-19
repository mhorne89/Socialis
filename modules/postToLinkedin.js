// Node modules
var Linkedin = require('node-linked-in');

// Modules
var mailError = require('./emailAlerts');

// Config
require('dotenv').config();

exports.post = function(body) {
  var linkedin = new Linkedin();

  linkedin.authenticate({ token: process.env.LINKEDIN_ACCESS_TOKEN });

  var postData = {
    data: {
      "comment": body.title + ': ' + body.link,
      "visibility": {
        "code": "anyone"
      }
    }
  };

  linkedin.shares.add(postData, function(err, res) {
    if (err) {
      mailError('Error posting to Linkedin', err);
      return;
    }

    console.log('Linkedin: ', res.updateUrl);
  });
};