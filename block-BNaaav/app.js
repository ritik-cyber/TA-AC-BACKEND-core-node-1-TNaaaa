var http = require("http");
var fs = require("fs");

var server = http.createServer(handlerServer);

function handlerServer(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-type", "text/html");
    fs.createReadStream("./about.html").pipe(res);
  }
}
server.listen(4000);
