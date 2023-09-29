var fs = require('fs');
fs.readFile('server.js', 'utf-8', function(err, data) {
  console.log(data);
});
