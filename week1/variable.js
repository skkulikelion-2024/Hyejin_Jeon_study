// 1. use strict
"use strict";

// 2. variable
// let : 값 변화 , const: 값 변화 X

let globalName = "global name";

{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
// console.log(name); 불가능
console.log(globalName);

// 3. const
//immutable data type
// -security
// - thread safety
// - reduce human mistakes
const daysInweek = 7;
const maxNumber = 5;

// 4. Data Type
// JS에서 자료형은 실행하면서 정해짐!

// Number
const count = 17; //int
const size = 18.1; //decimal Number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//special numeric values: infinity, -infinity, NaN
const ity = 1 / 0;
const iveInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(ity);
console.log(iveInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;

console.log(`value: ${char}, type: ${typeof char}`);
console.log(`value: ${brendan}, type: ${typeof brendan}`);
console.log(`value: ${greeting}, type: ${typeof greeting}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // 같은 스트링을 작성했어도 다른 심볼 => false

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //True
console.log(
  `value: ${symbol1.description}, type: ${typeof symbol1.description}`
);

// object, real- life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21; // 구성 요소는 변경 가능

// 5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 3;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
