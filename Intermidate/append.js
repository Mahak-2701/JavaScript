//append add data not overlaping
const fs=require('fs');
var content="hello by user!!";
fs.writeappend("demo.txt",content,function(error){
    if(error) throw errorMonitor;
    else console.log("Operation succesfully done!!");
})