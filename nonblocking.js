var fs = require("fs");
/*does not wait for the file to be read, rather executes the callback
when the code finishes*/
fs.readFile('input.txt', function(err, data){
  if(err) return console.error(err);
  console.log(data.toString());
});

console.log("Program Ended");
