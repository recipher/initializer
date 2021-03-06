var Promise = require('bluebird')
  , fs = require('fs')
  , path = require('path');

module.exports = function(directory) {
  if (fs.existsSync(directory) === false) return;

  var files = fs.readdirSync(directory)
    , args = Array.prototype.slice.call(arguments, 1);

  return Promise.all(files.map(function(file) {
    return require(path.join(directory, file)).apply(null, args);
  }));
};