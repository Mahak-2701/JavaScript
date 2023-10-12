//asynchronized method/non-blocking
const fs=reqiure('fs');
fs.readFile("./mahak.js","utf-8",function(err,data){
    if(err) throw err;
    elseconsole.log(data);
})