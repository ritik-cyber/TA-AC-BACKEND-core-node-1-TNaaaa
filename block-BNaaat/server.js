var http = require("http");
var fs = require("fs");

var server = http.createServer(handlerServer);

function handlerServer(req, res) {
  if (req.method === "GET" && req.url === "/file") {
    fs.readFile("./node.html", (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  } else if (req.method === "GET" && req.url === "/stream") {
    res.setHeader("Content-type", "text/html");
    fs.createReadStream("/node.html").pipe(res);
  }
}

server.listen(5555, () => {
  console.log("ready to port onoo 5555");
});
