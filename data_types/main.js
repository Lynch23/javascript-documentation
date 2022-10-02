//JavaScript variables can hold different data types: numbers, strings, objects and more, there are a lot of data types.
let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object

//Javascript is not a statically types language, therefore you can add different data types to each other
//for example:

let number = 5;
let text = "test"
let result = number + text;
//this will result in '5test'
//since the number variable is converted to string before the addition

//JavaScript evaluates expressions from left to right. Different sequences can produce different results:

let x = 20 + 5 + "New Text"
//This will result '25New Text'


//Also Javascript types are dynamic
//So you can do things like

let variable;
variable = 105;
variable = "Name"
variable = false;


//You can write strings with both double (") and single (') quotes and also if you write string templates, you can use backtics (`)
let string1 = "string1"
let string2 = 'string2'
let stringe = `string3`

//There are also numbers, where you can choose to write decimals or not
//such as

let number1 = 15;
let number2 = 15.00;

//or you can write numbers with scientific notation:
let y = 123e5;      // 12300000
let z = 123e-5;     // 0.00123

//Booleans
//there are 2 values for booleans, true and false
let bool1 = true
let bool2 = false

//you can use operators on other datatypes in order to return boolean values

let bool3 = 5 < 6 //true
let bool4 = 2^2 == 3 //false

//Arrays
//you can initiate arrays with `[]`

let array1 = [1, 2, 3]
//or make empty arrays:
let array2 = [];

//arrays can contain different data types

let array3 = [1, "true", false]

//Objects are written like
//they're very similar to how JSON is stored.
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


//source gathered from https://www.w3schools.com/js/js_datatypes.asp