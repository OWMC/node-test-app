const EventEmitter = require('events'); // Class - First letter is uppercase when referencing a Class (a container for props and methods, not a function).

var url = "https//requester.io/requesting";

class Requester extends EventEmitter { // class
    askForRequest(username) { // the method
        console.log(`I'm requester module (requester.js). What can I get for you, ${username}?`);
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'url'});
    };
};

module.exports = Requester;
