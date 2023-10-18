// const http = require('http');
// http.createServer(function (res, req) {
//     req.write("<b>hello</b><br>");
//     req.write("<span style= 'color:green';> user~~~</span>");
//     req.end();
// }).listen(8080);


const http = require('http');
 const server=http.createServer(function (res, req) {
    req.write("<b>hello</b><br>");
    req.write("<span style= 'color:green';> user~~~</span>");
    req.end();
});
const port=5000;
server.get("/",(req,res)=>{res.send("Mahak jaipal chouhan")});
server.listen(port,()=>{
    console.log(`server is runnimg on http://localhost:${port}`);
})

