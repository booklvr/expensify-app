const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Nick",
    //   age: 32,
    // });
    reject("something went wrong");
  }, 1500);
});

console.log("before");

promise
  .then((data) => {
    console.log("2", data);
  })
  .catch((error) => {
    console.log("error:", error);
  });

console.log("after");
