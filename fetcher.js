const request = require('request');
const fs = require('fs');
request(process.argv[2], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

fs.writeFile(process.argv[3], 'Page Downloader', function(err) {
    if (err) throw err;
    console.log('Downloaded and saved 3261 bytes to ./index.html');
  }); 
