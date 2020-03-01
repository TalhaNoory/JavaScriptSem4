const promiseDemo = (msg, delay, makeError) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const err = (Math.random() * 10) < 10
    if (makeError && err) {
      return reject(new Error("UPPPS"))
    }
    return resolve(msg.toUpperCase());
  }, delay);
})

async function asyncMethod() {
    const data1 = promiseDemo("Hello again", 5000, false)
    const data2 = promiseDemo("Hello Class", 3000, false)
    const data3 = promiseDemo("Hello Me", 2000, false)
    
    const promises = [data1, data2, data3];
    const result = await Promise.all(promises)
    result.forEach(r => console.log(r))
}

async function test() {
    await asyncMethod()
}

test()



/*
async function test() {
    try {
    const result = await asyncMethod();
    console.log(result)
    } catch (e) {
    console.log(result);
    }
}
*/

/*
const promiseDemo1 = promiseDemo("hej class", 1000, true)
promiseDemo1
.then(data => console.log(data))
.catch(e => console.log(e.message))
.finally(() => console.log("done"))
*/