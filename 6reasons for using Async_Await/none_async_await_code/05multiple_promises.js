// 5. Error Stacks

const makeRequest = () => {
    return callAPromise()
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => {
        throw new Error('oops');
    })
}

makeRequest()
    .catch(err => {
        console.log(err);
        //output
        // Error: oops at callAPromsie.then.then.then.then.then (index. js: 10:15)
    })

// The error stack returned from a promise chain 
// gives no clue of where the error happened.

/* 
the only function name it contains
 is callAPromise which is totally innocent 
 of this error 
 (the file and line number are still useful though).
*/