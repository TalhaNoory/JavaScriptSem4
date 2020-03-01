doSomething(function(responseOne) {
  doSomethingElse(responseOne, function(responseTwo, err) {
    if (err) {
      handleError(err);
    }
    doMoreStuff(responseTwo, function(responseThree, err) {
      if (err) {
        handleAnotherError(err);
      }
      doFinalThing(responseThree, function(err) {
        if (err) {
          handleAnotherError(err);
        }
        // Complete
      }); // end doFinalThing
    }); // end doMoreStuff
  }); // end doSomethingElse
}); // end doSomething

doSomething()
.then(doSomethingElse)
.catch(handleError)
.then(doMoreStuff)
.then(doFinalThing)
.catch(handleAnotherError)