// Modules
const postToFacebook = require('../modules/postToFacebook')
const postToTwitter = require('../modules/postToTwitter')
const postToLinkedin = require('../modules/postToLinkedin')

module.exports = function() {
  var body = {
    'title': result[rand].title,
    'link': 'https://www.eleven2.com/3986-0-1-5.html'
  }

  postToFacebook.post(body)
  postToTwitter.post(body)
  postToLinkedin.post(body)
}