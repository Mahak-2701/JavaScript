const http = require('http');
http.createServer(function (res, req) {
    req.write("<b>hello</b><br>");
    req.write("<span 'style= color:'green''> user~~~</span>");
    req.end();
}).listen(8080);