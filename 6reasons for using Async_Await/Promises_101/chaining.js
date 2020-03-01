const get = require('./promise_v_XMLHttpRequest');

// Here we chain .then() & .catch() together to create
// a sequense of asynchronous functions.

get(url)
.then(function(response) {
    response = JSON.parse(response);
    var secondURL = response.data.url
    return get( secondURL ); /* Return another Promise */
})
.then(function(response) {
    response = JSON.parse(response);
    var thirdURL = response.data.url
    return get( thirdURL );
})
.catch(function(err) {
    handleError(err);
})

// if a promise is resolved in the chain,
// it will move on to the next .then()
// if it should fail on the task
// it will jump/move to .catch()