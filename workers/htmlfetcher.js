// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.

var httpRequest = require('http-request');
var archive = require('../helpers/archive-helpers');

exports.fetcher = function() {
  console.log('-------------- the path to fetcher is: ',__dirname);
  archive.readListOfUrls(archive.downloadUrls);

  // url = 'http://' + url
  // console.log('------------->', url);
  // httpRequest.get(url, path, function (err, res) {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  // });
}

// exports.fetcher();
// '/Users/student/Desktop/2015-10-web-historian/workers/htmlfetcher.js'
// '/tmp/crontab.kgCpyHRKd4'