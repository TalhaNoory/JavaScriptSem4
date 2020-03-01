//Here is a common promise-ified version of an XMLHttpRequest


function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response); /* PROMISE RESOLVED */
      } else {
        reject(Error(req.statusText)); /* PROMISE REJECTED */
      }
    };

    req.onerror = function() {
      reject(Error("Network Error"));
    };
    req.send();
  });
}

get(url)
.then(function(response){
    /* successFunction */
}, function(err) {
    /* errorFunction */
})

// initial task --> 'successFunction' --> success task
// initial task --> 'errorFunction'  --> failure task

module.exports.get = get;