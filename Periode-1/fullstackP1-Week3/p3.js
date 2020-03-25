var myPromise = (text, delay) => new Promise (function(resolve, reject) {
  setTimeout(function() {
    const err = true;
//    if (err) {
//      return reject(new Error('WOOOPS'))
//    }
    resolve('Hello' + text);
  }, delay);
});

/*
var myPromise = (txt, delay) => new Promise(function (resolve, reject) {
  setTimeout(function () {
    const err = false;
    if (err) {
      return reject(new Error("UPPPPPPPPS"))
    }
    resolve('Hello ' + txt);
  }, delay);
});
*/

const results = [];
myPromise("Number 1", 500)
  .then(msg => {
    results.push(msg);
    return myPromise("Number 2", 1500)
  })
  .then(msg => {
    results.push(msg)
    throw new Error('WOOOOPS')
    return myPromise("Number 3", 2000)
  })
  .then(r => results.push(r))
  .catch(e => { console.log("In Catch", e) })
  .finally(() => console.log(results.join(", ")))
