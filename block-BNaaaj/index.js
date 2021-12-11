// console.log("welcome to altcampus");

var os = require("os");

var cpus = os.cpus().length;
var freemem = os.freemem();
var uptime = os.uptime();
var version = os.version();

// console.log(cpus, freemem, uptime, version);

var buff1 = Buffer.alloc(12);
buff1.write("welocme hell");
console.log(buff1.toString());
