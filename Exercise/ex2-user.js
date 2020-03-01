const {make6Randoms, makeSecureRandom} = require('./ex2')

//makeSecureRandom(48)
//.then(res => console.log(res))

make6Randoms()
.then(res => {
    res.forEach(n => console.log(n))
})