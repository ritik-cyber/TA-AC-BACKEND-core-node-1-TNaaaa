var http = require("http");
var url = require("url");

var server = http.createServer(handlerServer);

function handlerServer(req, res) {
  console.log(req.method, req.url);
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/plain-text");
    res.end();
  } else {
    res.end("notjig in this page");
  }
}

server.listen(5000, () => {
  console.log("start with 5k ");
});
