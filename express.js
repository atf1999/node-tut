var express = require("express");
var app = express();

//pages
app.get("/", function(req, res){
  res.send("Hello");
});
//page with param
app.get("/call/:msg", function(req, res){
  var msg = req.params.msg;
  res.send(msg);
});
app.listen(8081);
console.log("Listening on port 8081");
