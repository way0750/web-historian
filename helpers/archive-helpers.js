var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callBack) {
  //get all urls in array as strings
  // callBack(that array)

  // get all urls: need to get path
  var filePath = exports.paths.list
  // read all content and split by \n
  fs.readFile(filePath, 'utf-8', function (err, data) {
    callBack(data.split('\n'));
  })
  // console.log('--------------------', urls);

};

exports.isUrlInList = function(url, callback) {
  var urlArr;
  exports.readListOfUrls(function (urls) {
    callback(urls.indexOf(url) > -1);
  })
};

exports.addUrlToList = function() {
};

exports.isUrlArchived = function() {
};

exports.downloadUrls = function() {
};
