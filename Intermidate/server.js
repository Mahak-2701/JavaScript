const http = require('http');
http.createServer(function (res, req) {
    req.write("hello");
    req.end();
}).listen(8080);