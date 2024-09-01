// Basic requester module with require/exports, and inbuilt modules path/os/fs

// const path = require('path');
// const os = require('os');
// const fs = require('fs');
// 
const user = "Olly";

function sayHello(name) {
    console.log(`Good day to you, ${name}! I am app.js.`);
};
sayHello(user);
// 
// console.log("You are using: ", path.parse(__filename).name);
// 
// // console.log("OS total memory: ", os.totalmem());
// console.log("OS free memory:  ", os.freemem());
// 
// fs.readdir('./', (err, files) => {
//     if (err) console.log('Files in app... ERROR!  ', err);
//     else console.log("Files in app: ", files);
// });
//


// Event module, class: EventEmitter

const EventEmitter = require('events'); // Class - First letter is uppercase when referencing a Class (a container for props and methods, not a function).

 const emitter = new EventEmitter(); // Object - an instance of the class
 
 emitter.on('messageLogged', (arg) => { // arg / e / eventArg...
     console.log("Event Listener called for emitter object (old) set in app.js. ", arg);
 }); // on is like addListener
 // Raise an event
 emitter.emit('messageLogged', {id: 1, url: 'url'});


// Raise askForRequest (data: name)
const Requester = require('./requester'); // Custom class (extension of builtin events class) defined in requester.js 
const requester = new Requester(); // Instance (object)

requester.on('messageLogged', (arg) => { // arg / e / eventArg...
    console.log("Event Listener called on requester object (new) set in requester.js. ", arg);
}); 

requester.askForRequest(user); // run the instance
