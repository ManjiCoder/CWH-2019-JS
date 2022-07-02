console.time("mycode"); // IMP
console.log("Hello Console");
console.group("group"); // New
console.debug("I am console.debug");
// console.log() return undefined
console.log(34 + 34);
console.log(true);
console.log(34.3343);
console.log([2, 2, 4, 5, 3]);
console.log({ harry: "this", marks: 34 });
console.groupEnd("group"); // New
console.groupCollapsed("groupCollapsed"); // New
console.table({ harry: "this", marks: 34 });
console.warn("This is a warning");
console.timeEnd("mycode"); //IMP
console.assert(3 > 4, "This is not possible");
console.groupEnd("groupCollapsed");
// console.clear();

/*
This is 
a Multiline comment
*/