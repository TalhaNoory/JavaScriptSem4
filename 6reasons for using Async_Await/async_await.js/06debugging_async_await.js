// 6. Debugging

const makeRequest = async () => {
    await callAPromise()
    await callAPromise()
    await callAPromise()
    await callAPromise()
    await callAPromise()
}

/*
With async/await you don’t need arrow functions as much, 
and you can step through await calls 
exactly as if they were normal 
synchronous calls.
*/

// 7. which i think is not necessary to mention

/*
await can be used for both synchrounous 
and asynchronous expressions
Example: 'awai 5' = 'Promise.resolve(5)'
*/

/*
good for writing a library or a utility function¨
where you don't know whether the input
will be sync or async
*/