// Lesson 1: Introduction to JavaScript Fundamentals
//before going into this, please take note that i have basic knowledge in coding due to my c++ background

//Console.log()
console.log("Hello World");

//Comments
// single-lined comments
/* multi-Lined comments*/

//Syntax
// we must write in a syntax javascript will understand or it will cause an error.

//Arithmetics
console.log("Addition", 1 + 2);
console.log("Subtraction", 3 - 4);
console.log("Division", 5 / 6);
console.log("Multiplication", 7 * 8);
console.log("Modulus", 9 % 10);
console.log("Exponent", 11 ** 12);

//Data Types and Variables
// var - block scope
// let - function scope
// const - non changeable
//samples between the difference of var and let will be shown in future discussions due to the scope of this lesson

let string = "String";
let number = 12;
let boolean = true;
let un_defined;
let nothing = null;

console.log("String", string);
console.log("Number", number);
console.log("Boolean", boolean);
console.log("Undefined", un_defined);
console.log("Null", nothing);
//symbols will be shown in future discussions due to the scope of this lesson

/*
Exercises sourced from: https://github.com/Asabeneh/30-Days-Of-JavaScript.git
# 💻 Day 1: Exercises

1. Write a single line comment which says, _comments can make code readable_
2. Write another single comment which says, _Welcome to 30DaysOfJavaScript_
3. Write a multiline comment which says, _comments can make code readable, easy to reuse_
_and informative_

4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
5. Create datatypes.js file and use the JavaScript **_typeof_** operator to check different data types. Check the data type of each variable
6. Declare four variables without assigning values
7. Declare four variables with assigned values
8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
9. Declare variables to store your first name, last name, marital status, country and age in a single line
10. Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to the browser console.
*/

// 1. Write a single line comment which says, _comments can make code readable_
// _comments can make code readable_

// 2. Write another single comment which says, _Welcome to 30DaysOfJavaScript_
// _Welcome to 30DaysOfJavaScript_

// 3. Write a multiline comment which says, _comments can make code readable, easy to reuse_ _and informative_
/*  _comments can make code readable, easy to reuse_ _and informative_*/

// 4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
//Please proceed to variables.js

// 5. Create datatypes.js file and use the JavaScript **_typeof_** operator to check different data types. Check the data type of each variable

// 6. Declare four variables without assigning values
let name;
let age;
let year;
let course;

// 7. Declare four variables with assigned values
let name2 = "Chan";
let age2 = 21;
let year2 = "Third Year";
let course2 = "Software Engineering";

// 8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName = "Marie Jirsten";
let lastName = "Chan";
let maritalSatus = "Single";
let country = "Philippines";
let myAge = 21;

// 9. Declare variables to store your first name, last name, marital status, country and age in a single line
let first_Name = "Marie Jirsten",
  last_Name = "Chan",
  marital_Status = "Single",
  countryOrigin = "Philippines",
  my_Age = 21;

//10. Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to the browser console.
let _myAge = 21;
let _yourAge = 22;

console.log("My age is: ", _myAge);
console.log("Your age is: ", _yourAge);
