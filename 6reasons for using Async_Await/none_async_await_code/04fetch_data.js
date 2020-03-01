//3. Conditionals

// this kind of code is unacceptable
// there is too much nesting here (6 levels)
// braces and return statements that are only needed to
// propagate the final result up to the main promise
const makeRequest = () => {
    return getJSON()
    .then(data => {
        if (data.needsAnotherRequest) {
            return makeAnotherRequest(data)
            .then(moreData => {
                return moreData
            })            
        } else {
            console.log(data)
            return data
        }
    })
}