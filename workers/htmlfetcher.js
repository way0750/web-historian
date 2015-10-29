// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.

var httpRequest = require('http-request');

exports.fetcher = function(url, path) {
  url = 'http://' + url
  console.log('------------->', url);
  httpRequest.get(url, path, function (err, res) {
  if (err) {
    console.error(err);
    return;
  }
});
}
