"use strict";

//promise is a JavaScript object for asynchronous operation.
//State: pending -> fulfilled or rejected
//producer vs Consumer

//1. producer
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network,read files)
  console.log("doing something...");
  setTimeout(() => {
    //resolve('ellie');
    reject(new Error("no network"));
  }, 2000);
});

//2.Consumer : then, catch, finally
promise.then((value) => {
  console.log(value);
});
promise.catch((error) => {
  console.log(error);
});
promise.finally(() => {
  console.log("finally");
});

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber.then((num) => num * 2);
fetchNumber.then((num) => num * 3);
fetchNumber.then((num) => {
  return new Promise((resole, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
});
fetchNumber.then((num) => console.log(num));

//4. Error Handling
const getHEn = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("c"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => egg`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => e`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log);
//.catch(console.log);
