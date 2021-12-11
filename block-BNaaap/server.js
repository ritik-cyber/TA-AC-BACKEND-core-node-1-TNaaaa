var http = require("http");

var server = http.createServer(handlerServer);

function handlerServer(req, res) {
  console.log(req.method);
  res.statusCode = 201;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1> welocme to class </h1>");
}

server.listen(4444, () => {
  console.log("welocme to node");
});
