console.log("Welcome to tut-5");
// Type Conversion (TypeCasting) - transfer of data from one data type to another.
console.group("Type Conversion (TypeCasting)"); //New
let myVar;
myVar = String(34);
console.log(myVar, typeof myVar);

let booleanVar = String(false);
console.log(booleanVar, typeof booleanVar);

let booleanTrue = true;
let booleanFalse = false;
let trueNumber = Number(true); //1 'number'
let falseNumber = Number(false); //0 'number'
console.log(booleanTrue, typeof booleanTrue, trueNumber, typeof trueNumber);
console.log(booleanFalse, typeof booleanFalse, falseNumber, typeof falseNumber);

let date = String(new Date());
console.log(date, typeof date);

let arr = String([1, 2, 3, 4, 5]);
console.log(arr, typeof arr, arr.length);

let obj = String({ name: "Harry", age: 23 });
console.log(obj, typeof obj, obj.length);

let i = 75;
console.log(i.toString(), typeof i + " using .toString()");

let stri = Number("4343");
stri = Number("34d34"); // NaN 'number'
// stri = Number([1, 2, 3, 4, 5, 6, 7, 8, 9]); // NaN 'number'
console.log(stri, typeof stri);

let number = parseInt("34.99");
number = parseFloat("34.379483");

console.log(number, typeof number);
console.log(number.toFixed(2), typeof number + " Using .toFixed()");

console.groupEnd("Type Conversion (TypeCasting)"); //New

// Type Coercion - conversion of values from one data type to another.
console.group("Type Coercion"); //New
let myStr = Number("100");
let myNum = 200;
// console.log(myStr, myNum)
console.log(myStr + myNum);
console.groupEnd("Type Coercion"); //New