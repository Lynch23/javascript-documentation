// Destructuring is a way to unpack Arrays and Object and assign them to variables
// Uncomment console.log() in the various parts of code to log results in the console of your browser

// Destructuring Arrays
const ages = [5, 20, 16, 88]
let [firstAge, secondAge, thirdAge, fourthAge] = ages
//console.log(firstAge, secondAge, thirdAge, fourthAge) //-> 5 20 16 88

const names = ['Trevor', 'Andy', 'Monica', 'Aisha']
let [firstName, secondName, thirdName, fourthName] = names
//console.log(firstName, secondName, thirdName, fourthName) //-> Trevor Andy Monica Aisha


// Destructuring Arrays
const agesNnames = [[5, 20, 16, 88], ['Trevor', 'Andy', 'Monica', 'Aisha']]
let [agesArray, namesArray] = agesNnames
//console.log(agesArray, namesArray) // -> [5, 20, 16, 88] ['Trevor', 'Andy', 'Monica', 'Aisha']

// If there are values that one wishes to omit, a comma is added at the specific index
const years = [1969, 1970, 1992, 1996, 1999]
let [yearOne, yearTwo, ,yearFour, yearFive] = years
//console.log(yearOne, yearTwo, yearFour, yearFive) // -> 1969 1970 1996 1999 -> 1992 is omitted

const cities = ['Kampala', 'Nairobi', 'Abuja', 'Juba']
let [, secondCity, , lastCity] = cities
//console.log(secondCity, lastCity) // -> Nairobi Juba -> Kampala and Abuja are omitted

//Default values can be used in case a given index in the array is undefined
const fruits = ['apple', 'pineapple']
let [firstFruit, secondFruit, thirdFruit = 'mango', fourthFruit = 'papaya' ] = fruits
//console.log(firstFruit, secondFruit, thirdFruit, fourthFruit) // -> apple pineapple mango papaya


// We can destructure a few of the elements in array and store the rest as an array using the 
// spreadoperator(...)

const namesOfPeople = ['Candace', 'David', 'James', 'Trevor']
let [firstPerson, ...boyNames] = namesOfPeople
//console.log(firstPerson) // -> Candace
//console.log(boyNames) // -> [ "David", "James", "Trevor" ]


// Destruturing Objects
// The name of the variable we use to destructure should be the same as the key of the object
const person = {
	name: 'David',
	age: 27,
	favoriteColor: 'blue'
}

let { name, age, favoriteColor } = person
//console.log(name, age, favoriteColor) // -> David 27 blue

// Renaming during destructuring
let { name:n, age:a, favoriteColor:c } = person
//console.log(n, a, c) // -> David 27 blue

// If the key is absent in the object, the variable is assigned undefined
// Default values can be used in case the variable is assigned undefined

let { name: newName, age: newAge, favoriteColor: newColor, height = 145} = person
//console.log(newName, newAge, newColor, height) // -> David 27 blue 145



// Example of a function that takes in an object as a parameter
const personObj = {
	name: 'Denis',
	height: 168,
	age: 42
}

// Without destructuring
const returnData = (person) => {
	console.log(`My name is ${person.name}`)
	console.log(`My height is ${person.height} cm`)
	console.log(`I am ${person.age} years old`)
}

//returnData(personObj)
// -> My name is Denis
// -> My height is 168 cm
// -> I am 42 years old


// With Destructuring

const returnData2 = ({name, height, age}) => {
	console.log(`My name is ${name}`)
	console.log(`My height is ${height} cm`)
	console.log(`I am ${age} years old`)
}

//returnData2(personObj)
// -> My name is Denis
// -> My height is 168 cm
// -> I am 42 years old

// Destructuring an object during iteration
const peopleObj =[
 {
	name: 'Denis',
	height: 168,
	age: 42
},
{
	name: 'Grace',
	height: 170,
	age: 23
},
{
	name: 'Kathy',
	height: 163,
	age: 29
}
]

for (const {name, height, age} of peopleObj) {
	//console.log(name, height, age)
	// -> Denis 168 42
	// -> Grace 170 23
	// -> Kathy 163 29
}


// Using the spread operator to copy an array
const boyzNames = ['David', 'James', 'Trevor']
const girlzNames = ['Kathy', 'Candace', 'Martha']
const peopleNames = [...boyzNames, ...girlzNames]

//console.log(peopleNames) // -> [ "David", "James", "Trevor", "Kathy", "Candace", "Martha" ]

// Using the spread operator to copy an object
const vegetable = {
	name: 'carrot',
	color: 'orange',
	quantity: 45
}

const copiedVegetable = {...vegetable}
//console.log(vegetable) // -> { name: "carrot", color: "orange", quantity: 45 }

// Modifying an object
const copiedVegetable1 = {...vegetable, quantity: 67}
//console.log(copiedVegetable1) // -> { name: "carrot", color: "orange", quantity: 67 }