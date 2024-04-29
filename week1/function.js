// function

function whoIsDaniel() {
  console.log("You want to know who Daniel is?");
  console.log("He is fucking awsome!");
}

whoIsDaniel();

//매개변수
function addSum(x, y) {
  console.log(x + y);
}

addSum(3, 5);

// callback
function randomQuiz(answer, printYes, printNO) {
  if (answer === "love you") {
    printYes();
  } else {
    printNO();
  }
}

const printYes = function () {
  console.log("Yes!");
};

const printNO = function () {
  console.log("no!");
};

randomQuiz("wrong", printYes, printNO);
randomQuiz("love you", printYes, printNO);

//arrow function
//const simplePrint = function () {
//  console.log("simplePrint!");
// };

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => {
  //do more
  return a * b;
};
