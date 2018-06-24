module.exports = (max) => {
  var rand = Math.random() * (max - 0);
  return Math.floor(rand);
};