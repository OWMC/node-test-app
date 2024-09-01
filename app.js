// Basic requester module with require/exports, and inbuilt modules path/os/fs

// const path = require('path');
// const os = require('os');
// const fs = require('fs');
// 
// var user = "Olly";
// 
// function sayHello(name) {
//     console.log(`Good day to you, ${name}!`);
// };
// sayHello(user);
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
// const requester = require('./requester');
// 
// requester(user);

// Event module, class: EventEmitter

const EventEmitter = require('events'); // Class - First letter is uppercase when referencing a Class (a container for props and methods, not a function).
const emitter = new EventEmitter(); // Object - an instance of the class

emitter.on('messageLogged', () => {
    console.log("Listener called: ");
}); // on is like addListener
emitter.emit('messageLogged');
