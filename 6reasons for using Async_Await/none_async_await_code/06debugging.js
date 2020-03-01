// 6. Debugging

const makeRequest = () => {
    return callAPromise()
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
}

// 1st problem:
/*
You can't set breakpoints in 'ArrowFunctions'
that return expressions (no body)
*/

// 2nd problem:
/*
If you set a breakpoints inside a .then block
and use debug shortcuts like step-over,
the debugger will not move to the following .then
because it only "steps" through synschonous code.
*/