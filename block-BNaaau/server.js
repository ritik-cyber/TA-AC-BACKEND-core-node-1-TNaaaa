var http = require("http");

// 1st question

// var server = http.createServer();

// server.listen(5000, (req, res) => {
//   console, log(req, res);
// });

// 2 question is
// var server = http.createServer(handlerServer);
// function handlerServer(req, res) {
//   res.end("My first server in NodeJS");
// }

// server.listen(5100, () => {
//   console.log("hello");
// });

// 3 question

// var server = http.createServer(handlerServer);
// function handlerServer(req, res) {
//   console.log(req.headers);
//   res.end()
// }

// server.listen(5100, () => {
//   console.log("hello");
// });

// 4 questions

// var server = http.createServer(handlerServer);
// function handlerServer(req, res) {
//   console.log(req.method, req.url);
//   res.end();
// }

// server.listen(5100, () => {
//   console.log("hello");
// });

// 5

// var server = http.createServer(handlerServer);
// function handlerServer(req, res) {
//   console.log(req.headers);
//   res.end();
// }

// server.listen(7000, () => {
//   console.log("server listening on port 7000");
// });

// final question

var server = http.createServer();
