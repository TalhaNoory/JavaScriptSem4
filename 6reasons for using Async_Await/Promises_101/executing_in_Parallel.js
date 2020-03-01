const get = require('./promise_v_XMLHttpRequest');

// Array.map() allows us to perform an action on each item in an array
// & creates a new array of the results of these actions
var arrayOfURLs = ['one.json', 'two.json', 'three.json', 'four.json'];
var arrayOfPromises = arrayOfURLs.map(get);

// Promise.all() returns a promise that is only resolved
// when every promise wihtin an array is resolved.
// if any of the promises should fail/reject in the array
// the Promise.all() is also rejected!
Promise.all(arrayOfPromises)
.then(function(arrayOfResults) {
    /* Do something when all Promises are resolved */
})
.catch(function(err) {
    /* Handle error if any of the Promises fails */
})