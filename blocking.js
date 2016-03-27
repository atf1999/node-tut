var fs = require("fs");

var data = fs.readFileSync('input.txt');

//executes in order
console.log(data.toString());
console.log("Program Ended");
