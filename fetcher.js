const request = require('request');
const fs = require('fs');
const http = require('http');

request(process.argv[2], (res, err, body) => {
  fs.writeFile(process.argv[3], body, function(err) {
    if (err) throw err;
    let stats = fs.statSync(process.argv[3]);
    let fileSizeInBytes = stats["size"];
    console.log('Downloaded and saved ' + fileSizeInBytes + ' bytes to ./index.html');
  });
});
