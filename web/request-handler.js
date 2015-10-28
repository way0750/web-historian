var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelper = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // to send a list of all sites that are already cached on server
  // res.end(archive.paths.list);
  // if(req.url === '/' && req.method === 'GET') {
  // }
  // var pathName = req.url === '/' ? '/index.html' : req.url;
  // /archive.paths.siteAssets, pathName
  // console.log(pathName);
  // if(req.method === 'GET' && req.url === '/'){
    // res.end(__dirname)
    httpHelper.serveAssets(res, '/public/index.html', function(data) {
      // if(err) {
      //   res.writeHead(404, httpHelper.headers);
      //   res.end();
      // } else {
        res.writeHead(200, httpHelper.headers);
      //   console.log('--------------', data);
        res.end(data);

      // }
    })
  // } else if() {
  //   res.writeHead(404, httpHelper.headers);
  //   res.end();
  // }
};


// have routing mechinism, 
// if the route matches with one of the caches sites then serve it
// if not then redirect user to loading page, start finding site and adding it into archive text file



        // var body;
        // res.on('data', function(chunk) {
        //   body += chunk;
        // });
        // res.on('end', function() {
        //   res.writeHead(200, httpHelper.headers);
        //   console.log('--------------', data);
        //   res.end(body);
        // });