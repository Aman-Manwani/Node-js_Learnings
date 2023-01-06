const EventEmitter = require('events');

const event = new EventEmitter();

event.on('saymyname', () => {
    console.log("your name is aman manwani");  
})

event.emit("saymyname");

