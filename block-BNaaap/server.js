var http = require("http");

var server = http.createServer(handlerServer);

function handlerServer(req, res) {
  res.statusCode = 201;
  res.writeHead(201, { "Content-Type": "text/plain" });
  res.end();
}

server.listen(4444, () => {
  console.log("welocme to node");
});
