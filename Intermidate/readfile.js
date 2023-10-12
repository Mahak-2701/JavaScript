//asynchronized method/non-blocking
const fs=require('fs');
fs.readFile("./maha.js","utf-8",function(err,data){
    if(err) throw err;
    else
    console.log(data);
})
