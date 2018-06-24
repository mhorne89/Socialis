// Node modules
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const app = express();

/* Middleware */
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const userRoutes = require("./api/routes/users");

// Services
const updateService = require('./services/updateService');
const postingService = require('./services/postingService');
const affiliateService = require('./services/affiliateService');

// Routes which should handle requests
app.use("/users", userRoutes);

// Cron job runs the posting service every 2 hours
cron.schedule('0 */2 * * *', () => postingService());

// Cron job runs the update service every day at 2.30am
cron.schedule('30 2 * * *', () => updateService());

// Cron job runs the update service every day at 2.30am
cron.schedule('0 */4 * * *', () => affiliateService());

app.options("/**", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});

app.listen(8081);
