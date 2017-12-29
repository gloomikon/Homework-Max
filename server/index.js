'use strict';

const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res) =>{
	const readFile = (url) => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

readFile('./script.js')
  .then(
    result => console.log(result),
    error => console.log(error.message)
  );	
});

server.listen(8000, () => {
	console.log('Listening on port 8000');
});