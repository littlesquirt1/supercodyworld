const http = require('http');
var port = process.env.PORT;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hi, World!');
}

const server = http.createServer(requestListener);
server.listen(port);