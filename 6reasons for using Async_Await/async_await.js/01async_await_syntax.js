// This is how it look with async/await

const makeRequest = async () => {
    console.log(await getJSON())
    return 'done'
}

makeRequest();