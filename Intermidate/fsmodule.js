var fs = require('fs');
fs.readFile('server.js', 'utf-8', function(err, data) {
  if(err){
    console.log(err);
  }
  console.log(data);
});
