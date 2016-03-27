var http = require("http");

//Creates server
http.createServer(function(request, response){

  //Send the http header
  //Http status: 200: OK
  //Content TypeL text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  //Send the response body as "Hello World"
  response.end('Hello World\n');
}).listen(8081);

//Console will print
console.log('Server on http://127.0.0.1:8081/');
