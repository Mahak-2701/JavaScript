const express=require('express');
const path=require('path');
const app=express();
const spat=path.join(__dirname,'./public',"/page.html");
//midleware use by use
app.use(express.static(spat));


app.get('/',(req,res)=>{
    
    console.log(spat);
   // res.send("weklcome");
   res.sendFile(spat);
}).listen(8080);


app.get('/image',(req,res)=>{
    res.send("<h1>this is image!!<h1>")
});

// go to newapi.js