// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Subscribe to an event
myEmitter.on('myEvent', (data) => {
    setTimeout(() => {
        console.log('Event occurred with data: ', data);
    }, 1500);
});
