// Node modules
const Linkedin = require('node-linked-in');

// Modules
const mailError = require('./emailAlerts');

// Config
require('dotenv').config();

exports.post = (body) => {
  const linkedin = new Linkedin();

  linkedin.authenticate({ token: process.env.LINKEDIN_ACCESS_TOKEN });

  const postData = {
    data: {
      "comment": `${ body.title }: ${ body.link }`,
      "visibility": { "code": "anyone" }
    }
  };

  linkedin.shares.add(postData, (err, res) => {
    if (err) return mailError('Error posting to Linkedin', err);
    console.log('Linkedin: ', res.updateUrl);
  });
};