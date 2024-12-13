const promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    console.log("I am resolved");
  }, 5000);
});

console.log(promise);


promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
