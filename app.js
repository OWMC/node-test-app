const path = require('path');
const os = require('os');
const fs = require('fs');

var user = "Olly";

function sayHello(name) {
    console.log(`Good day to you, ${name}!`);
};
sayHello(user);

console.log("You are using: ", path.parse(__filename).name);

console.log("OS total memory: ", os.totalmem());
console.log("OS free memory:  ", os.freemem());

console.log('Files in app: ' + fs.readdir('./', (err, files) => {
    if (err) console.log('Error: ', err);
    else console.log("Result: ", files);
}));


const requester = require('./requester');

requester(user);
