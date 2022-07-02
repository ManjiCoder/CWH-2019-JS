console.log("We are at tut 6");
const name = "Harry";
const greeting = "Good Morning";
console.log(greeting + " " + name);

let html;
html =
  "<h1> This is heading</h1>" +
  "<p>" +
  greeting.concat(" " + name) +
  "</p>" +
  "";
html = html.concat("String-1", "String-2"); //  We can concat n no. of Strings
console.log(html);

// String Properties
console.group("String Properties");
console.log(`Length - ${html.length}`);
console.log(`html[1] - ${html[1]}`);
console.groupEnd("String Properties");

// String Methods
console.group("String Methods");
console.log(html);
console.log(html.toLowerCase() + " - toLowerCase");
console.log(html.toUpperCase() + " - toUpperCase");
console.log(` indexOf("thi's") - ${html.indexOf("thi's")}`); // If Not Found then return -1
console.log(` indexOf("This") - ${html.indexOf("This")}`); // If Found then return index
console.log(`indexOf("is") - ${html.indexOf("is")}`);
console.log(`lastIndexOf("is") - ${html.lastIndexOf("is")}`);
console.log(`charAt(3) - ${html.charAt(3)}`);
console.log(`endsWith("String-2") - ${html.endsWith("String-2")}`); // return boolean
console.log(`endsWith("dfsf") - ${html.endsWith("dfsf")}`); // return boolean
console.log(`includes(" fs") - ${html.includes(" fs")}`); // return boolean
console.log(`substring(3, 7) - ${html.substring(3, 7)}`);
console.log(`substr(3, 7) - ${html.substr(3, 7)}`);
// Both substring & slice are identical,
// But substring(-index) return full string
// And slice(-index) return -index
console.debug(`substring(-4) - ${html.substring(-4)}`);
console.debug(`slice(-4) - ${html.slice(-4)}`); // IMP
console.log(`substring(-4) - ${html.substring(0, 4)}`);
console.log(`slice(0, 4) - ${html.slice(0, 4)}`); // IMP
console.log(html.split(" ")); // IMP
console.log(html.split(">")); // IMP
console.log(`replace("This", "Harry") - ${html.replace("This", "Harry")}`);
console.log(`replace("This", "Harry") - ${html.replaceAll("This", "Harry")}`);
console.log(html + " - Og String");
console.groupEnd("String Methods");

// Template Literals - (``)
console.groupCollapsed("Template Literals");
let fruit1 = "OrANGE";
// console.log(fruit1.indexOf("ANGE"));
// console.log(fruit1.length);
let sliceStr = fruit1.slice(2, 6).toLowerCase();
fruit1 = fruit1.replace("ANGE", sliceStr);
// console.log(sliceStr);
let fruit2 = "Apple";
let myHtml = `Hello ${name}
            <h1> This is Heading </h1>
            <p> You Like ${fruit1} ${fruit2} </p>
`;
// document.write(myHtml);
console.log(myHtml);
document.body.innerHTML = myHtml;
console.groupEnd("Template Literals");