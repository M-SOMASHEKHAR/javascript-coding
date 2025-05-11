 console.log('hello world!');

 // value of variable in js is undefined
let userName = 'Jimmy';
console.log(userName);

 /*
 variable naming rules
 1. cannot be a reserved key word
 let if = 'Jimmy';

 2. should be meaningfull

 3. cannot start with a number

 4. cannot conatin space or -

 5. follow camelcase
 let firstName;

 6. case sencitive
 let FirstName; ref 5.
*/

// constants
const interestRate = 0.3;
console.log(interestRate);
// interestRate = 1;
// console.log(interestRate);

//primitive/value variables
//string
let name = 'jimmy';
console.log(name);

//number
let age = 40;
console.log(age);

//boolean
let isApproved = true;
console.log(isApproved);

let firstName = undefined;
console.log(firstName);
let selectedColor = null;
console.log(selectedColor);

//reference types
//object : object in real life
let person = {
    name : "Sony",
    age : 30
};
console.log(person);

//dot notation
console.log(person.name);

person['name']='John';
//bracket nodtation
console.log(person['name']);