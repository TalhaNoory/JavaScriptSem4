//2. Error Handling

// Same code as the error_handling.js
// this is just coded with async/await
// The catch block now will handle parsing errors
const makeRequest = async () => {
    try {
        // this parse may fail
        const data = JSON.parse(await getJSON())
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}