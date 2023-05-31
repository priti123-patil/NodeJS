const EventEmitter = require("events");

const event = new EventEmitter();

//When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. 
//Any values returned by the called listeners are ignored and discarded.

event.on('sayMyName',() => {
    console.log("your name is priti")
});

//The eventEmitter.on() method is used to register listeners, while the eventEmitter.emit() method is used to trigger the event.

event.emit("sayMyName");


event.on('checkMyPage',(st,msg) => {
    console.log(`Status code is ${st} and message is ${msg}`);
});

event.emit("checkMyPage",200,"success");