var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener 1
var l1 = function l1(){
  console.log('l1');
}
//listener 2
var l2 = function l2(){
  console.log('l2');
}

//bind connection event with l1
eventEmitter.addListener('connection', l1);
//bind connection event with l2
eventEmitter.on('connection', l2);

var listenerCount = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log('There are: ' + listenerCount + ' on the connection event');

//fire connection event 
eventEmitter.emit('connection');

//remove l1
eventEmitter.removeListener('connection', l1);
console.log('l1 no longer listening');

//fire connection
eventEmitter.emit('connection');

var listenerCount = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log('There are: ' + listenerCount + ' on the connection event');

console.log('program ended');
