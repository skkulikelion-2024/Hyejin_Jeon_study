//async & await
//clear style of using promise

//1. async
function fetchUser() {
  return "ellie";
}

const user = fetchUser();
console.log(user);

//2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "apple";
}

async function getBanana() {
  await delay(3000);
  return "banana";
}

async function pickFruits() {
  const applePromise = await getApple();
  const bananaPromise = await getBanana();
  const apple = await applePromise();
  const banana = await bananaPromise();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
