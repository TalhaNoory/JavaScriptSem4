// 5. Error stacks

const makeRequest = async () => {
  await callAPromise();
  await callAPromise();
  await callAPromise();
  await callAPromise();
  await callAPromise();
  throw new Error("oops");
};

makeRequest().catch(err => {
  console.log(err);
  // output
  // Error: oops at makeRquest (index. js:9:11)
});

/* 
Con: when developing 
on your local environment 
and have the file open in an editor
*/

/*
Pro: when trying to 
make sense of error logs
coming from your production server 
*/

/* 
In other words:
you know at least where your error came from
NOT like the other, without async/await
which shows an error from .then() multiple times
*/