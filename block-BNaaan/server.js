var http = require("http");

var server = http.createServer(handlerServer);

function handlerServer(req, res) {
  console.log(req.headers, req.method, req.url);
  res.end("mother fucker");
}

server.listen(3000, () => {
  console.log("welcome to my server");
});
