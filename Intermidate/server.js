const http = require('http');
http.createServer(function (res, req) {
    res.write("hello");
    res.end();
})