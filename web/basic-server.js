var http = require("http");
var handler = require("./request-handler");
var initialize = require("./initialize.js");

// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
// because archives/site, etc are in gitignore, we have to reinitialize when we start up server, so we are creating archive directory
initialize("./archives");

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(handler.handleRequest);

//if this file is being called in another module, we are exporting our server to that file
if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log("Listening on http://" + ip + ":" + port);
  console.log('hello world');
}

