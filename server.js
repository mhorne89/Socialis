// Node modules
var express = require('express');
var cron = require('node-cron');
var feed = require("feed-read");
var _ = require("lodash");

var app = express();

// Modules
var saveToDatabase = require("./modules/saveToDatabase");
var postToSocialMedia = require("./modules/postToSocialMedia");


// Cron job runs every 2 hours and 
cron.schedule('0 */2 * * *', function(){ postToSocialMedia(); });

// Cron job runs every day at 2.30am and adds articles to database
cron.schedule('30 2 * * *', function(){ saveToDatabase(); });


// Give response to incoming requests
app.get('/*', function(req,res){ res.status(200).send('Welcome to Socialis') });

app.listen(process.env.PORT || 5000);

