// To create promise
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log("Async task complete.");
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log("Promise Comsude...");
// })

const getUser = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve({ name: "Jhon", age: 30 });
    } else {
      reject("Error: Somting went wrong");
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise has been resolve or rejected");
  });

console.log("Hello Global scope");
