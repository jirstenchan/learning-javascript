// Lesson 2: Data Types of JavaScript
//Primitive - modifiable
//Non-Primitive - non-modifiable (objects and arrays)
let num = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(num == numbers); //false

let userOne = {
  name: "Chan",
  age: 21,
};

let userTwo = {
  name: "Chan",
  age: 21,
};

console.log(userOne == userTwo); //false
//they are false because variable does not necessarily contain the value but an address id for the value

let num2 = [1, 2, 3];
let numbers2 = num2;

console.log(num2 == numbers2); //true

let userOne2 = {
  name: "Chan",
  age: 21,
};

let userTwo2 = userOne2;

console.log(userOne2 == userTwo2); //false

//math object
console.log("This is Math round:", Math.round(5.05));
console.log("This is math floor", Math.floor(5.05));
console.log("This is math ceil", Math.ceil(5.6));
console.log("This is math min", Math.min(1, 2, 3));
console.log("This is math max", Math.max(1, 2, 3));
console.log("This is math random", Math.random());
console.log("This is math absolute", Math.abs(-7));
console.log("This is math squareroot", Math.sqrt(100));
console.log("This is math power", Math.pow(2, 3));
console.log("This is math E", Math.E);
console.log("This is math log", Math.log(10));

//creating random num generator using math objects
let random = Math.floor(Math.random() * 12);

console.log(random);

let string1 = "Hi my name is ";
let string2 = "Marie Jirsten Chan";

let string3 = string1 + string2;
console.log(string3);

//Long literal strings
let para =
  "Today i am learning Javascript\
because i want to be a backend \
developer";
console.log(para);

let para2 =
  "Line One \
Line Two";
console.log(para2);

//Escape Sequence in Strings
console.log("This is a \nNew Line");
console.log("This is a \tTab");
console.log("This is to write a backlash \\");
console.log("\'this is for single quotes\'");
console.log('"this is for single quotes"');

//Template Literals (Template Strings)
let template = "This is a template";
console.log(`I will inject a template string: ${template}`);

//String Methods
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.     ";

console.log(string);
console.log("Printing length: " + string.length);
console.log("Printing first character: " + string[0]);
console.log("Printing uppercase: " + string.toUpperCase);
console.log("Printing lowercase: " + string.toLowerCase);
console.log("Printing sliced characters: " + string.substr(2, 4));
console.log("Printing substring: " + string.substring(2, 18));
console.log("Printing split: " + string.split());
console.log("Printing split with space: " + string.split(" "));
console.log("Printing non trailing: " + string.trim());
console.log("Printing if it includes hate: " + string.includes("hate"));
console.log(
  "Printing if we replace love with hate: " + string.replace("love", "hate"),
);
console.log("Printing value of char position 2: " + string.charAt(2));
console.log("Printing ASCII value of char position 2: " + string.charCodeAt(2));
console.log("Printing index of substring: " + string.indexOf("love"));
console.log("Printing last index of substring: " + string.lastIndexOf("love"));
console.log(
  "Printing concatenating: " + "I want to learn Javascript because",
  string,
);
console.log(
  "Checks to see if it starts with love: " + string.startsWith("love"),
);
console.log("Checks to see if it starts with love: " + string.endsWith("love"));
console.log("Searching for love: " + string.search("love"));
console.log("Matching for love: " + string.match("love"));
let match = string.match(/love/gi);
let int = match ? match.length : 0;
console.log("Matching for love: " + int);
let love = "love";
console.log("Reapeat love:", love.repeat(3));

//Changing Data Types
//number to string

let number = 23;

console.log(number.toString());
console.log(String(number));

//String to int or float
let string23 = "23.5  ";
console.log(parseInt(string23));
console.log(Number(string23));
console.log(+string23);

/*

## 💻 Day 2: Exercises

### Exercise: Level 1

1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
2. Print the string on the browser console using __console.log()__
3. Print the __length__ of the string on the browser console using _console.log()_
4. Change all the string characters to capital letters using __toUpperCase()__ method
5. Change all the string characters to lowercase letters using __toLowerCase()__ method
6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
8. Check if the string contains a word __Script__ using __includes()__ method
9. Split the __string__ into an __array__ using __split()__ method
10. Split the string 30 Days Of JavaScript at the space using __split()__ method
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times

### Exercise: Level 2

1. Using console.log() print out the following statement:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```

2. Using console.log() print out the following quote by Mother Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
5. Check if 'on' is found in both python and jargon
6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
7. Generate a random number between 0 and 100 inclusively.
8. Generate a random number between 50 and 100 inclusively.
9. Generate a random number between 0 and 255 inclusively.
10. Access the 'JavaScript' string characters using a random number.
11. Use console.log() and escape characters to print the following pattern.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

### Exercises: Level 3

1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.
2. Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/

//Exercise Level 1
//1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
console.log("Exercise 1");

let challenge = "30 Days Of JavaScript";

//2. Print the string on the browser console using __console.log()__
console.log("This is the challenge: " + challenge);

//3. Print the __length__ of the string on the browser console using _console.log()_
console.log("This is the length:", challenge.length);

//4. Change all the string characters to capital letters using __toUpperCase()__ method
console.log("This is the uppercase:", challenge.toUpperCase());

//5. Change all the string characters to lowercase letters using __toLowerCase()__ method
console.log("This is the lowercaes:", challenge.toLowerCase());

//6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
console.log("This is the slice:", challenge.substr(0, 3));

//7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
console.log("This is the slice:", challenge.substring(3, 30));

//8. Check if the string contains a word __Script__ using __includes()__ method
console.log("Does it include script:", challenge.includes("Script"));

//9. Split the __string__ into an __array__ using __split()__ method
console.log("Turning it into an array:", challenge.split(""));

//10. Split the string 30 Days Of JavaScript at the space using __split()__ method
console.log("Turning it into an array:", challenge.split(" "));

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
let socialMedia = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log("Turning it into an array:", socialMedia.split(", "));

//12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
console.log(
  "Replacing Js to python:",
  challenge.replace("JavaScript", "Python"),
);

//13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
console.log(
  "What is character at index 15 in '30 Days Of JavaScript' string?: " +
    challenge.charAt(15),
);

//14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
console.log(
  "What is character at index 15 in '30 Days Of JavaScript' string?: " +
    challenge.charCodeAt(11),
);

//15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
console.log(
  "determine the position of the first occurrence of a: " +
    challenge.indexOf("a"),
);

//16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
console.log(
  "determine the position of the last occurrence of a: " +
    challenge.lastIndexOf("a"),
);

//17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
let because =
  "You cannot end a sentence with because because because is a conjunction";

console.log(because);

console.log(
  "Use indexOf to find the position of the first occurrence of the word because: ",
  because.indexOf("because"),
);

//18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log(
  "Use indexOf to find the position of the last occurrence of the word because: ",
  because.lastIndexOf("because"),
);

//19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log("Searching for because:", because.search("because"));

//20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let spaces = "   Hello World.  ";
console.log(spaces);

console.log(spaces.trim());

//21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
console.log("Does it start with 30:", challenge.startsWith("30"));

//22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
console.log("Does it start with 30:", challenge.endsWith("t"));

//23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
console.log("Finding all matches: " + challenge.match(/a/gi));

//24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log("Concatinating string twice: " + challenge.concat(string));

//25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
console.log("repeating string twice: " + challenge.repeat(2));

//Exercise Level 2
console.log("\nExercise 2");

//1.
console.log(
  "The quote \'There is no exercise better for the heart than reaching down and lifting people up.'\ by John Holmes teaches us to help one another.",
);

//2.
console.log(
  "\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"",
);

//3
let str10 = "10";
console.log(+str10 == 10);

//4
let num98 = 9.8;
console.log(Math.ceil(num98) == 10);

//5
console.log("python".includes("on"));
console.log("jargon".includes("on"));

//6
console.log(" hope this course is not full of jargon".includes("jargon"));

//7
console.log(Math.random() * 51 + 50);

//8

//9
console.log(Math.random() * 256);

//10
let js = "JavaScript";
let ran = Math.floor(Math.random() * 10);
console.log(js[ran]);

//11
let escapechara = `1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`;

console.log(escapechara);

//12
let because2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(because2.substr(31, 23));

//Exercise 3
//1
console.log("Exercise 3:");
let lovetwo =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

lovetwo = lovetwo.toLowerCase();

let int2 = lovetwo.match(/love/gi);
console.log(int2.length);

//2
let intbecause = because2.match(/because/gi);
console.log(intbecause.length);

//3
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

pattern = /[@%#$]/g;

console.log(sentence.replace(pattern, ""));

//4
let income =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let salary = income.match(/\d+/g)[0];
let bonus = income.match(/\d+/g)[1];
let courses = income.match(/\d+/g)[2];

let totalAnnualIncome =
  parseInt(salary) * 12 + parseInt(bonus) + parseInt(courses) * 12;
console.log(totalAnnualIncome);
