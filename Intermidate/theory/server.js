// const http=require('http');
// const server=http.createServer((req,res)=>{
//     const fs=require('fs');
//     fs.readFile('promt.js','utf-8',function(err,data){
//         console.log(data);
//     })
// }).listen(8080)
const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("<b>hello</b>");
    const fs=require('fs');
    fs.readFile('promt.js','utf-8',function(err,data){
       console.log(data);
    })
});
const port=5000;
server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})