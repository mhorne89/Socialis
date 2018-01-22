// Node modules
const feed = require("feed-read")

// Modules
const connection = require('../modules/connect')
const getRandomNumber = require('../modules/getRandomNumber')
const addHashes = require('../modules/addHashes')
const postToFacebook = require('../modules/postToFacebook')
const postToTwitter = require('../modules/postToTwitter')
const postToLinkedin = require('../modules/postToLinkedin')

module.exports = function() {
  connection.query('SELECT * FROM articles', function(err, result) {
    if (err) console.log(err)

    var rand = getRandomNumber(result.length)

    var body = {
      'title': result[rand].title,
      'link': result[rand].link
    }

    // Add hastags to title
    body.title = addHashes(body.title)

    postToFacebook.post(body)
    postToTwitter.post(body)
    postToLinkedin.post(body)
  })
}