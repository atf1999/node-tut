//events obj
var events = require('events');

//emitter obj
var emitter = new events.EventEmitter();

//create event handler
var connectHandler = function connected(){
  console.log('connection successful');
  //fires event
  emitter.emit("dataRecieved");
}
//Bind connection event with handler
emitter.on('connection', connectHandler);

//bind dataRecieved event with anonymous function
emitter.on('dataRecieved', function(){
  console.log("Data recieved");
});

//fire connection event
emitter.emit('connection');
console.log('ended');
