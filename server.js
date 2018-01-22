// Node modules
const express = require('express')
const cron = require('node-cron')

const app = express()

// Services
const updateService = require('./services/updateService')
const postingService = require('./services/postingService')
const affiliateService = require('./services/affiliateService')

// Cron job runs the posting service every 2 hours
cron.schedule('0 */2 * * *', function(){ postingService(); })

// Cron job runs the update service every day at 2.30am
cron.schedule('30 2 * * *', function(){ updateService(); })

// Cron job runs the update service every day at 2.30am
cron.schedule('0 */4 * * *', function(){ affiliateService(); })

app.listen(8081)
