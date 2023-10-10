const { log } = require('console');
var fs = require('fs');
fs.readFile('server.js', 'utf-8', function(err, data) {
  if(err){
    console.log(err);
  }
  console.log(data);
});


var some = require('override.ps1');

some.info(some.generatePlayerId());
some.info('Hello im mahak')