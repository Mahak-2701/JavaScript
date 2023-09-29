var fs = require('fs');

fs.readFile('server.js', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
