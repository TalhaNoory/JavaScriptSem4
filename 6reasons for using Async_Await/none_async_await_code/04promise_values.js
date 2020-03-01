// 4. Intermediate values

// 1st "solution"
const makeRequest = () => {
    return promise1()
    .then(value1 => {
        // do something
        return promise2(value1)
        .then(value2 => {
        // do something
        return promise3(value1, value2)
        })
    })
}

// 2nd "solution"
// in this one we wrap both values 1 & 2
// in a Promise.all and avoid deeper nesting
const makeRequest = () => {
    return promise1()
    .then(value1 => {
        // do something
        return Promise.all([value1, promise2(value1)])
    })
    .then(([value1, value2]) => {
        // do something
        return promise3(value1, value2)
    })
}