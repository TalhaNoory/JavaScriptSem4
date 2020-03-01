//Lesson 3: Creating modules

// The 'url' & 'log' function are both scoped to this module => logger.js (they are private)
// In order to use this module ohter places, we use the export & import to call it!

import EventEmitter from 'events';

var url = 'http://mylogger.io/log';

/*
function log(message) {
    //Sends an HTTP request
    console.log('testing' + message);
}
*/

//Lesson 4: Loading Modules

//How to load them!
//export default logger = log;

//Look at app.js for the import!

//Lesson 5: look at app.js (last lines!)

//Lesson 10: Extending EventEmitter

class Logger extends EventEmitter {
    //functions in class becomes methods ones they are inside a class!
    log(message) {
        //Sends an HTTP request
        console.log('testing' + message);

        //Raise an event
        // 'this' references Logger class itself, which extends EventEmitter
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger;