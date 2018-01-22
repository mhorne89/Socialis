module.exports = function(max) {
  var rand = Math.random() * (max - 0);
  return Math.floor(rand);
};