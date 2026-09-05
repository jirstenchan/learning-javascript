//Booleans
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);

let isHungry = true;
console.log(isHungry);
let isTired = false;
console.log(isTired);
let isLeaerning = true;
console.log(isLeaerning);

//undefined
let isundefined;
console.log(isundefined);

//null
let isnull = null;
console.log(isnull);

//Assignment Operator
// equal sign
let equal = "The equal sign is an assignment operator";

//Arithmatic Operators
//Addtion
let add = 1 + 2;
let sub = 3 - 2;
let mul = 2 * 3;
let div = 4 / 2;
let mod = 5 % 2;
let exp = 2 ** 3;

console.log(`Add: ${add}`);

//Comparison Operators

console.log(1 > 2);
console.log(4 <= 5);
console.log("mango".length > "potato".length);

//Logical Operators
console.log(5 > 4 && 5 < 6);
console.log(5 > 4 || 5 > 6);
console.log(!isLeaerning);

//Increment Operator
//pre-increment
let count = 0;
console.log(++count);
console.log(count);
//post-increment
console.log(count++);
console.log(count);

//Decrement Operator
//pre-drecrement
let counts = 0;
console.log(--count);
console.log(count);
//post-decrement
console.log(count--);
console.log(count);

//Ternary Operators
let isSleepy = false;

isSleepy
  ? console.log("You should sleep")
  : console.log("You dont need to sleep");

isSleepy = true;

isSleepy
  ? console.log("You should sleep")
  : console.log("You dont need to sleep");

let num = -4;
num > 0
  ? console.log("This number is positive")
  : console.log("This number is negative");

num = 5;
num
  ? console.log("This number is positive")
  : console.log("This number is negative");

// //Winfow Methods
// //window alerts
// alert("Hello World");
// //window prompt
// let feeling = prompt("How are you feeling today?");
// console.log(feeling);

// let mood = prompt("How is your mood today?", "insert mood");
// console.log(mood);

// //window confirm
// let agree = confirm("Do you agree with the terms and conditions?");
// console.log(agree);

//Date Object
let now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

let allSeconds = Date.now();
console.log(allSeconds);

const timeInSeconds = new Date();
console.log(timeInSeconds.getTime());

console.log(allSeconds == timeInSeconds);

console.log(allSeconds == timeInSeconds.getTime());

console.log(2 == "2");

//Day 3 Exercises
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Marie Jirsten",
  lastName = "Chan",
  country = "Philippines",
  city = "Cebu",
  isMarried = false;

const years = new Date();
console.log("years", years.getFullYear());

//2. Check if type of '10' is equal to 10
console.log("Is 10 equal to \'10\':", 10 == "10");

//3. Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8) == 10);

//4. Boolean value is either true or false.
//   1. Write three JavaScript statement which provide truthy value.
//   2. Write three JavaScript statement which provide falsy value.

//4.1
let hi = "hi";
console.log(hi);
hi ? console.log(true) : console.log(false);
42 ? console.log(true) : console.log(false);
[] ? console.log(true) : console.log(false);

//4.2
let undy;
0 ? console.log(true) : console.log(false);
null ? console.log(true) : console.log(false);
undy ? console.log(true) : console.log(false);

/*

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3 true
   2. 4 >= 3 true
   3. 4 < 3 false
   4. 4 <= 3 false
   5. 4 == 4 true
   6. 4 === 4 true
   7. 4 != 4 false
   8. 4 !== 4 false
   9. 4 != '4' false
   10. 4 == '4' true
   11. 4 === '4' false
   12. Find the length of python and jargon and make a falsy comparison statement.

   */

console.log("python".length != "jargon".length);

/*
6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12 true
   2. 4 > 3 && 10 > 12 false
   3. 4 > 3 || 10 < 12 true
   4. 4 > 3 || 10 > 12 true
   5. !(4 > 3) false 
   6. !(4 < 3) true
   7. !(false) true 
   8. !(4 > 3 && 10 < 12) false
   9. !(4 > 3 && 10 > 12)true
   10. !(4 === '4')true 
   11. There is no 'on' in both dragon and python
*/
console.log(
  "There is no 'on' in both dragon and python?",
  !("dragon".includes("on") && "python".includes("on")),
);

/*
7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
   */

//7.1
let dateToday = new Date();
console.log(dateToday.getFullYear());
//7.2
console.log(dateToday.getMonth());
//7.3
console.log(dateToday.getDate());
//7.4
console.log(dateToday.getDay());
//7.5
console.log(dateToday.getHours());
//7.6
console.log(dateToday.getMinutes());
//7.7
console.log(dateToday.getSeconds());

//Level 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//    ```sh
//    Enter base: 20
//    Enter height: 10
//    The area of the triangle is 100
//    ```
let b = prompt("Please give me a base for triangle: ");
let h = prompt("Please give me a height for triangle: ");
console.log("The are is: ", 5 * b * h);

//  2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

//    ```sh
//    Enter side a: 5
//    Enter side b: 4
//    Enter side c: 3
//    The perimeter of the triangle is 12
//    ```

let sidea = prompt("Enter side a: ");
let sideb = prompt("Enter side b: ");
let sidec = prompt("Enter side b: ");
console.log("The perimeter is: ", sidea + sideb + sidec);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Please give me length for rectangle: ");
let width = prompt("Please give me length for width: ");
console.log("The preimeter is: ", 2 * (length + width));

//4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let pi = 3.14;
let radius = prompt("Please give me radius: ");
console.log("The are is ", pi * radius * radius);
console.log("The circumference is ", 2 * pi * radius);

//5
// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

//    ```sh
//    Enter hours: 40
//    Enter rate per hour: 28
//    Your weekly earning is 1120
//    ```

let hours = prompt("Enter hours: ");
let rate = prompt("Enter rate per hour: ");
console.log("Your weeky earning is " + hours * rate);

//6
// If the length of your name is greater than 7 say, your name is long else say your name is short.
// Compare your first name length and your family name length and you should get this output.

//    ```js
//    let firstName = "Asabeneh";
//    let lastName = "Yetayeh";
//    ```

//    ```sh
//    Your first name, Asabeneh is longer than your family name, Yetayeh
//    ```
let firstName2 = prompt("What is your first name?");
let lastName2 = prompt("What is your last name?");

firstName2 > lastName2
  ? console.log(
      `Your first name ${firstName2} is longer than your family name, ${lastName2}`,
    )
  : console.log(
      `Your first name ${firstName2} is shorter than your family name, ${lastName2}`,
    );

//7 Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.
// ```js
//    let myAge = 250;
//    let yourAge = 25;
//    ``````sh
//    I am 225 years older than you.
//    ```;

let myAge = 21;
let yourAge = 345;

let difference = Math.abs(myAge - yourAge);

myAge > yourAge
  ? console.log(`I am ${difference} older than you.`)
  : console.log(`I am ${difference} younger than you.`);

//8 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//  ```sh

//  Enter birth year: 1995
//  You are 25. You are old enough to drive

//  Enter birth year: 2005
//  You are 15. You will be allowed to drive after 3 years.
//  ```

let birthYear = prompt("Enter birth year: ");
let thisYear = new Date().getFullYear();
let age = thisYear - birthYear;

age >= 18
  ? console.log(`You are ${age}. You are old enough to drive`)
  : console.log(
      `You are ${age}. You will be allowed to drive after ${Math.abs(age)} years`,
    );

//9
//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//    ```sh
//    Enter number of years you live: 100
//    You lived 3153600000 seconds.
//    ```
let yearsLived = prompt("Enter number of years you live: ");
console.log(`You lived ${yearsLived * 31536000}seconds`);

//10
// Create a human readable time format using the Date time object
// const h = new Date(year,month,day)

//    1. YYYY-MM-DD HH:mm
//    2. DD-MM-YYYY HH:mm
//    3. DD/MM/YYYY HH:mm

let date1 = new Date();
//10.1
console.log(
  `${date1.getFullYear()}-${date1.getMonth()}-${date1.getDay()} ${date1.getHours()}:${date1.getMinutes()}`,
);
//10.3
console.log(
  `${date1.getDay()}-${date1.getMonth()}-${date1.getFullYear()} ${date1.getHours()}:${date1.getMinutes()}`,
);
//10.3

console.log(
  `${date1.getDay()}/${date1.getMonth()}/${date1.getFullYear()} ${date1.getHours()}:${date1.getMinutes()}`,
);

//Level 3
// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let month = date1.getMonth();
month < 10 ? (month = `0${month}`) : (month = month);

let day = date1.getMonth();
day < 10 ? (day = `0${day}`) : (day = day);

console.log(
  `${date1.getFullYear()}-${month}-${day} ${date1.getHours()}:${date1.getMinutes()}`,
);
