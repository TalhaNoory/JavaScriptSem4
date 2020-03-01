// Node Core

/*
Node Module System

Gonna learn 4 modules build into the core of node!

1 : OS = Operating System
2 : fs = file System
3 : events
4 : http
*/


//Lesson 1: Global Object

//console.log();  // Global: this can be accessed anywhere in any file

//setTimeout();       // Global: We use this to call a function after a given delay
                    // We can also use this on the client, inside of the browser
                    // Or inside of node

//clearTimeout();     // Global

//setInterval();      // Global: We use this to call a function repeatedly after a given delay
//clearInterval();    // Global: We use this to stop a function from called repeatedly

//These are Global Objects, there are more of them, monkaS
//The objects presented above, belongs to the 'window' object below!

//'window'  //in browser we have this 'window' object in which we present our global scope
            //example shown below

//var message = '';
//window.message;


//Now remember, as told, in node we don't have this 'window' object.
//Instead we have 'Global' object where we can access all our objects. Example shown below.
/*
global.console.log();
global.setTimeout();
global.message();
*/

//Remember the variables we set, are NOT added to the 'Global' object, example shown below.

//Code below will throw a 'undefined' error!
//Remember to uncomment "var message = '';" line 34
//console.log(global.message);

//Lesson 2: Modules

//app.js is our main module!
//To use the functions from that module in another module, you need to export into the target module!

//We will from here on create a new module and move on from there!
