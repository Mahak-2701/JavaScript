//append add data not overlaping
// const fs=require('fs');
// var content="hello by user!!";
// fs.appendFile("demo.txt",content,function(error){
//     if(error) throw errorMonitor;
//     else console.log("Operation succesfully done!!");
// })

//synchronization
const fs=require('fs');
var content="hello by user!!";
fs.appendFileSync("demo.txt",content);
console.log(content);
console.log("i am waiting!!");