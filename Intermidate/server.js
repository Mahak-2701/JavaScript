// const http = require('http');
// http.createServer(function (res, req) {
//     req.write("<b>hello</b><br>");
//     req.write("<span style= 'color:green';> user~~~</span>");
//     req.end();
// }).listen(8080);


// const http = require('http');
//  const server=http.createServer(function (res, req) {
//     req.write("<b>hello</b><br>");
//     req.write("<span style= 'color:green';> user~~~</span>");
//     req.end();
// });
// const port=5000;
// server.listen(port,()=>{
//     console.log(`server is runnimg on http://localhost:${port}`);
// })

const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("<b>hello</b>");
});
const port=5000;
server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})