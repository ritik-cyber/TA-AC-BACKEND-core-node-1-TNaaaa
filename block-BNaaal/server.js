var http = require("http");

var server = http.createServer(handlerServer);

function handlerServer(req, res) {
  res.end("helllo world");
}

server.listen(4000, () => {
  console.log("welocome to new server");
});
