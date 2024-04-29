//string concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1+2 = ${1 + 2}`);

//Numberic operators
console.log(1 + 2);
console.log(1 - 2);
console.log(1 / 2);
console.log(1 * 2);
console.log(1 % 2);
console.log(1 ** 2);

//Increment and decrement operators
i = 1;
console.log(i++); // i의 값을 전달하고 i에 1을 더합니다.
console.log(i); // i값 확인하면 2가 나옵니다.
console.log(++i); // i에 1을 더하고, i의 값을 반환합니다.

//비교
console.log(1 == 1);
console.log(2 != 1);
console.log(1 != 1);
console.log(2 > 1);
console.log(1 > 2);
console.log(1 >= 1);

1 === 1;
1 === "1";
1 !== 2;

//대입
var a = 10;
var b = 2;
a += b;
console.log(a);

a /= b;
console.log(a);

//논리 &&(and) ||(or) !(not)

//Conditional
//if, else if, else
let student = {
  hakbun: 23,
};

if (student.hakbun >= 23) {
  console.log("귀여운 새내기");
} else if (student.hakbun < 23 && student.hakbun >= 19) {
  console.log("선배님");
} else if (student.hakbun < 19 && student.hakbun > 16) {
  console.log("화석");
} else {
  console.log("석유");
}

//(조건) ? (true일 때 반환 값) : (false일 때 반환 값)
var likelion = "handsome";
var result = likelion == "handsome" ? "yes" : "no";
console.log(result);

//Switch
var fruit = "banana";

switch (fruit) {
  case "banana":
    console.log("It really is a banana!");
    break;
  case "apple":
    console.log("I hate apple!");
    break;
  case "grape":
    console.log("Grape is bad for you");
    break;
  default:
    console.log("its not a fruit!");
}

//Loops
//while
var number = 1;
while (number < 10) {
  number += 1;
}
console.log(number);

//do while
var number = 12;
do {
  number += 1;
} while (number < 10);
//expected output: 13

//for
for (a = 1; a < 10; a++) {
  console.log("나는 대단한 사람이야!");
}
