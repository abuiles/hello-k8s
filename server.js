var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!');
};

var server = http.createServer(handleRequest);
console.log("Listening in :8080");
server.listen(8080);
