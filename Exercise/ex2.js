const fetch = require("node-fetch")

const makeSecureRandom = size => new Promise((reject, resolve) => {
    require("crypto").randomBytes(size, function(err, buffer) {
        if (err) {
            reject(err);
        }
        let secureHex = buffer.toString('hex')
        let sh = {let: size, randoms: secureHex}
        return resolve(sh)
    })
})

module.exports.makeSecureRandom = makeSecureRandom;
module.exports.make6Randoms = make6Randoms;

async function make6Randoms() {
    const data1 = makeSecureRandom(48)
    const data2 = makeSecureRandom(40)
    const data3 = makeSecureRandom(32)
    const data4 = makeSecureRandom(24)
    const data5 = makeSecureRandom(16)
    const data6 = makeSecureRandom(8)

    const promises = [data1, data2, data3, data4, data5, data6];
    const results = await Promise.all(promises)
    return results;
    //results.forEach(r => console.log(r))
}

make6Randoms();

//asyncMethod()

/*
let crypto = require('crypto')

let randoms = [];
const secureRandoms = {title: `6 Secure Randoms`, randoms:[] }

crypto.randomBytes(48, function(err, buffer) {
    if(err)
    return console.log(err)
})

randoms.push(buffer.toString('hex'))
crypto.randomBytes(48, function (err, buffer) {
    secureRandoms.randoms.push({length: 48, random: buffer.toString('hex')})
})
*/