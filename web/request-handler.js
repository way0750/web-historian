var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelper = require('./http-helpers');
var urlCheck = archive.isUrlInList;
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // to send a list of all sites that are already cached on server
  var pathName = req.url === '/' ? '/index.html' : req.url;
  // archive.paths.siteAssets, pathName
  // if(req.method === 'GET' && req.url === '/'){
  if(req.method === 'GET') {
    if(req.url === '/') {
      httpHelper.serveAssets(res, path.join(archive.paths.siteAssets, pathName))
    } else {
      httpHelper.serveAssets(res, path.join(archive.paths.archivedSites, pathName))
    }
  }
  if(req.method === 'POST') {
    var formData = "";
    req.on('data', function (data) {
      formData += data;
    });
    req.on('end', function (err, data) {
      formData = formData.split('=')[1];
      archive.isUrlInList(formData, function(exists) {
        if(exists) {
          httpHelper.serveAssets(res, path.join(archive.paths.archivedSites, pathName))
        } else {
          archive.addUrlToList(formData, function() {
            httpHelper.serveAssets(res, path.join(archive.paths.siteAssets, '/loading.html'), 302)
            // res.writeHead(302, httpHelper.headers);
            // res.end()
          }, res);
        }
      });
    });
  }
};


// have routing mechinism, 
// if the route matches with one of the caches sites then serve it
// if not then redirect user to loading page, start finding site and adding it into archive text file
// http://localHost:8080/www.google.com