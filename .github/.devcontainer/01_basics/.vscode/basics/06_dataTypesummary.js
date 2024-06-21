// Primitive 

// 7 categorized types : String, Number,Boolean, Null, Undefined, Symbol,BigInt

const score = 100;
// in typescript score: number = 100 means we assign data type in this
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// let userEmail = Undefined this also we assign same o/p gives

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 4651654644354n
// as we give n after number it converts to bigNumber
// console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "krish", "nagraj"]
let myObj = {
    name: "shivam",
    age: 22
}
const myname = "atharva"
const myFunction = function (){
    console.log("hello India");
}


// datatype and its reeturn type
// primitive datatype

// String => string
// integer/float => number
// undefined => undefined
// Boolean => Boolean
// null => unfefined
// BigInteger => bigint
// Symbol => Symbol
// console.log(typeof myname);
// console.log(typeof scoreValue);
// console.log(typeof userEmail);
// console.log(typeof isLoggedIn);
// console.log(typeof outsidetemp);
// console.log(typeof bigNumber);
// console.log(typeof id);

// Reference or Non primitive

// Array => object
// Objects => object
// Function => function
console.log(typeof heros); 
console.log(typeof myObj);
console.log(typeof myFunction);





