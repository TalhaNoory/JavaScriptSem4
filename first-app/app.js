//Her we import the 'functions' from the module we need,
//We can also import all of it, by importing the 'Module' itself!
//import logger from './logger';

/*
function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Talha Noory');
*/

/* 
This will throw an exception!
Answer: in node we dont have a 'Window' or a 'Document object'
these are part of a runetime that we get with browsers
*/
//console.log(window);

//Lesson 5: Module Wrapper Function

//Here you get the file name & complete path to where the module lies!
//console.log(__filename);
//Here you get the path to the directories that contains the module!
//console.log(__dirname);

//Lesson 6: Path Modules
/*
import logger from './logger';

var pathObj = logger.__dirname;

console.log(pathObj);
*/

//Lesson 7: Operating System(OS) Module

/*
import os from 'os';

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(totalMemory);
console.log(freeMemory);

//Template string
//ES6 / ES2015 : EXMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
*/

//Lesson 7: File System(FS) Module

//import fs from 'fs';

//Synchronous-methods are purely for simplicity
//Asynchronous-methods are non-blocking, and should be used in a real-world application

//This will return all the files in the current folder
//const files = fs.readdirSync('./');

//fs.readdir('$', /* 2nd arg is a Callback */ function(err, files) {

/*    if(err) console.log('Error', console.err);
    else console.log('Result', files);
});
console.log(files);*/

//Lesson 8: Events module

// Event is a signal that indicates something has happened in our application!
//Event is a Class, a class is a container for properties & functions which we call methods!

//This is the class
import EventEmitter from 'events';
//This is the object, which we gonna use
//const emitter = new EventEmitter();

//Register a listener, to the corresponding event(listener is a function!)
/*
If you register this Emitter after calling the emitter method,
it will iterate all the registered listener and calls them synchronously!
*/
/*emitter.on('messageLogged', function() {
    console.log('Listener called');
});*/

//Raise an event, but this needs a listener, when an event is raised!
//emitter.emit('messageLogged');

//Lesson 9: Event Arguments

//We get the class and object from line 77 and 79!

/*
emitter.on('messageLogged', function(arg) { // e & eventArg is also fine!
    console.log('Listener called', arg);
});

//Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});
*/

//To make the code more simpler we use ES6 which has an 'arrowfunction'

/*
emitter.on('messageLogged', (arg) => { // e & eventArg is also fine!
    console.log('Listener called', arg);
});

emitter.emit('messageLogged', {id: 1, url: 'http://'});
*/

//Exercise - Raise: logging (data: message)

//Lesson 10 go to logger.js

import Logger from './logger';
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => { // e & eventArg is also fine!
    console.log('Listener called', arg);
});

logger.log('message');

