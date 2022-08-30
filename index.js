const http = require('http');

let count = 0;

const requestListener = function(req, res) {
  console.log(JSON.stringify({
    count,
    message: `Requested for ${count++} time(s)`
  }));

  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);