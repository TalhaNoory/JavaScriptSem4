const fetch = require('node-fetch')

const getJokesSequential = async () => {
    const jokes = [];
    for (let i = 0; i < 50; i++) {
        const p = await fetch("http://api.icndb.com/jokes/random").then(r=> r.json())
        jokes.push(p.value.jokes)
    }
    return jokes;
}

const getJokesParallel = async () => {
    const promises = [];
    for (let i = 0; i < 50; i++) {
        const p = await fetch("http://api.icndb.com/jokes/random").then(r=> r.json())
        promises.push(p)
}
const all = await Promise.all(promises)
return all.map(j => j.value.joke)
}

async function test() {
    const jokes = await getJokesParallel()
    console.log(jokes)
//    const jokes2 = await getJokesSequential()
//    console.log(jokes2)
}

test();

/*
const getJokesSequential = async () => {
    const jokes = [];
    const j1 = await fetch("http://api.icndb.com/jokes/random").then(r=> r.json())
    const j2 = await fetch("http://api.icndb.com/jokes/random").then(r=> r.json())
    jokes.push(j1.value.jokes)
    jokes.push(j2.value.jokes)
    return jokes;
}

async function test() {
    const jokes = await getJokesSequential()
    console.log(jokes)
}

test();
*/