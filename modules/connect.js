/* Connection to MongoDB */

var mongoose = require('mongoose');
require('dotenv').config();

module.exports = mongoose.connect(
  `mongodb://${ process.env.MONGOOSE_USER }:${ process.env.MONGOOSE_PASS }@dev-shard-00-00-t7l3r.mongodb.net:27017,dev-shard-00-01-t7l3r.mongodb.net:27017,dev-shard-00-02-t7l3r.mongodb.net:27017/test?ssl=true&replicaSet=dev-shard-0&authSource=admin&retryWrites=true`
);