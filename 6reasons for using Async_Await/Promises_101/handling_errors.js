const get = require("./promise_v_XMLHttpRequest");

// Handling Errors option nr 1.

get(url)
  .then(function(response) {
    /* succesFunction */
  }, undefined)
  .then(undefined, function(err) {
    /* errorFunction */
  });

// Handling Errors option nr 2.
// Making things more readable
// We make use of the method catch()
// Which is shorthand for a then(undefined, errorFunction)

get(url)
.then(function(response) {
    /* successFunction */
})
.catch(function(err) {
    /* errorFunction */
})

// initial task --> .then(successFunction) --> success task
// initial task --> .catch(errorFunction)  --> failure task

