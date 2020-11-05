const request = require('request');
const fs = require('fs');
const http = require('http');
request(process.argv[2], () => {
  fs.writeFile(process.argv[3], process.argv[2], function(err) {
    if (err) throw err;
    console.log('Downloaded and saved 3261 bytes to ./index.html');
  }); 
});


