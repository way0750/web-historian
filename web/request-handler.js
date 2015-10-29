var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelper = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // to send a list of all sites that are already cached on server
  var pathName = req.url === '/' ? '/index.html' : req.url;
  // archive.paths.siteAssets, pathName
  // if(req.method === 'GET' && req.url === '/'){
    httpHelper.serveAssets(res, path.join(archive.paths.siteAssets, pathName), function(err, data) {
      if(err) {
        res.writeHead(404, httpHelper.headers);
        res.end()
      } else {
        res.writeHead(200, httpHelper.headers);
        res.end(data);
      }
    })
  // } else if() {
  //   res.writeHead(404, httpHelper.headers);
  //   res.end();
  // }
};


// have routing mechinism, 
// if the route matches with one of the caches sites then serve it
// if not then redirect user to loading page, start finding site and adding it into archive text file
// http://localHost:8080/www.google.com