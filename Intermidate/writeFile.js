//asynchronization write file
const fs=require('fs');
var content="hello by admin!!";
fs.writeFile("demo.txt",content,function(error){
    if(error) throw errorMonitor;
    else console.log("Operation succesfully done!!");
})