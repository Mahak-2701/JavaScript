//asynchronized method/non-blocking
// const fs=require('fs');
// fs.readFile("./mahak.js","utf-8",function(err,data){
//     if(err) throw err;
//     else
//     console.log(data);
// })

//syncronized method
const fs=require('fs');
 const content=fs.readFile("./mahak.js","utf-8")
