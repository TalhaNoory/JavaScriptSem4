// This is how you would implement it using promises
const makeRequest = () =>
  getJSON()
    .then(data => {
        console.log(data);
        return "done";
  });

makeRequest();
