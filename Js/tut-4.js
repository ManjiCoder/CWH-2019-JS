console.log("Tut-4");
// Primitive Datatype - Memory Allocation Is Stack.
// String ,Number, Boolean, Undefined, Symbol & Null(Object).

// 1.String - Data Type : String
var name = "Harry";
// TypeOfOperator
console.log(name, typeof name);
// 2.Number - Data Type : Number
let marks = 34;
console.log(marks, typeof marks);
// 3.Boolean - Data Type : Boolean
let isDiver = true;
console.log(isDiver, typeof isDiver);
// 4.Null - Data Type : object (bogas return value)
let nullVar = null;
console.log(nullVar, typeof nullVar);
// 5.Undefined - Data Type : Undefined
let undefinedVar = undefined;
console.log(undefinedVar, typeof undefinedVar);
// 6.Symbol - Data Type: Symbol (TODO)
let symbol = Symbol(`Data Type of symbol :`);
console.log(symbol, typeof symbol);

// Reference Datatype - Memory Allocation Is Heap.
// Array ,Object ,Function & Date.

// 1.Array - Data Type : Object
let myArr = [1, 2, 3, 4, false, "string"];
console.log(myArr, typeof myArr);
// 2.Object Literals - Data Type : Object
let stMarks = {
  harry: 89,
  carry: 34,
  RohanDas: 32,
};
console.log(stMarks, typeof stMarks);
// 3.Fuction - Data Type : Object
function findName() {}
console.log(findName, typeof findName);
// 4.Dates - Data Type : Object
let date = new Date();
console.log(date, typeof date);