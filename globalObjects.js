//prints file name
console.log(__filename);

//prints dir name
console.log(__dirname);

//prints after 2 seconds
function printHello(){
  console.log("Hello");
}
setTimeout(printHello, 2000);

//example of clearTimeout
var t = setTimeout(printHello, 2000);
//clear timer to void action
clearTimeout(t);

//example of setInterval, printing every 2 seconds
setInterval(printHello, 2000);
