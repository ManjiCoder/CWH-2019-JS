console.log("Tut-3");
/*
Variables in JS
1. Var   -  Gobal Scope
2. Let   -  Block Scope (Let Override Var value inside Block Scope)
3. Const -  Gobal Scope But Cannot Redeclared &
            But In Case of Array or Object we can used method of 
            Array or Object like push or pop etc)
*/
var name = "hary";
var channel; // Declaring Variable
// channel = 'codewithHarry'; // assigned value to variable
console.log(name, channel);

/*
Rules for creating JavaScript Variables
1. Cannot start with numbers
2. Can start with letter, numbers, 
   _(used in OOP) or $(used in Jquery)
3. Are case sensitive
*/
var city = "Mumbai";
console.log(city);
const ownerName = "Hari Ram";
// CANNOT DO THIS
// ownerName = "Harry"; // Assignment to constant variable.
// const fruit ;        //const' declarations must be initialized
console.log(ownerName);

// Local Scope
{
  let city = "Rampur";
  city = "Silicon Valley";
  //only if city is here, then it will override var value
  console.log(`form let ${city}`);
}
console.log(`form var ${city}`);

const arr1 = [1, 2, 3, 4, 5, 6];

arr1.pop();
arr1.push(2);
console.log(arr1);

/*
Most Common Programming Case Types.
1. camelCase (Preferred)
2. kebab-case
3. snake_case
4. PascalCase
*/
