var fs = require("fs");
var data = '';

//Create a readable stream
var readerStream = fs.createReadStream('input.txt');

//set encoding to be utf8
readerStream.setEncoding('UTF8');

//handle stream events -> data, end, and error
readerStream.on('data', function(chunck){
  data += chunck;
});

readerStream.on('end', function(){
  console.log(data);
});

readerStream.on('error', function(err){
  console.log(err.stack);
});

console.log("Program Ended");
