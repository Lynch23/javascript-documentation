/* Arrays are special variables which can hold more than one element
of different data types
 */
/* creating an empty array */
const arr = []

/* creating an empty array with the keyword new */
const array1 = new Array()

/* creating an array with predefined elements */
const colors = ['red', 'yellow', 'green']

/* creating an array with the keyword new with predefined elements */
const array2 = new Array('red', 'yellow', 'green')

/* Elements in an array can be accessed through zero indexing */
colors[0] = 'red'
colors[1] = 'yellow'
colors[2] = 'green'



/* Array with elements of different data types */
const mixedArray = [1, 'boy', {a: 3}]

const cars = ['Toyota', 'Audi', 'Chevrolet', 'Ferrari'] /* Array of strings, cars */
const numbers = [1, 2, 3, 4, 5] // Array of numbers
const fruits = ['apple', 'banana', 'orange', 'mango'] /* Array of strings, fruits */

/* We use the _length_ property to get the length of an array */
cars.length // 4
numbers.length // 5
fruits.length // 4


/* Last index in an array determined using the _length_ property*/
let lastIndex = cars.length - 1 // 3
cars[lastIndex] // Ferrari

/* Creating an array using split */
let clubsString = 'Arsenal, Chelsea, Man City, Liverpool, Man United'
clubs = clubsString.split(',')
clubs // [ "Arsenal", " Chelsea", " Man City", " Liverpool", " Man United" ]
let text ='I love JavaScript, HTML, CSS and React'
words = text.split(' ')
words // [ "I", "love", "JavaScript,", "HTML,", "CSS", "and", "React" ]

/* Arrays are mutable, they can be modified */
const prices = [1.2, 2.6, 4.3, 9.0, 4.2]
prices[0] = 5.2 // changing price 1.2 at index 0 to 5.2
prices[prices.length - 1] = 3.3 // Changing the last price from 4.2 to 3.3
prices // [ 5.2, 2.6, 4.3, 9, 3.3 ]


/* Methods to manipulate arrays */
/* Available methods are Array, length, concat, indexOf,
 slice, splice, join, toString, includes, lastIndexOf,
  isArray, fill, push, pop, shift, unshift */

/* Array: Creates a new array */
const arr = new Array()   

/* fill: fills an array with static values */
const arrayOfTwos = new Array(3).fill(2)
arrayOfTwos // [ 2, 2, 2 ]

/* concat: concatenate two arrays and creates a new array*/
const oddNumbers = [1, 3, 5, 7]
const evenNumbers = [2, 4, 6, 8]
const numbers = oddNumbers.concat(evenNumbers)
numbers // [ 1, 3, 5, 7, 2, 4, 6, 8 ]


const boysNames = ['Peter', 'John', 'David']
const girlsNames = ['Mary', 'Martha', 'Anne']
const names = boysNames.concat(girlsNames)
names // [ "Peter", "John", "David", "Mary", "Martha", "Anne" ]

/*length: determines size of an array */
const countries = ['Uganda', 'Kenya', 'Zambia', 'Tanzania']
countries.length // 4

/* indexOf: checks if an item exists in an array, if it does, the index of the
   item is returned, else -1 is returned */

const numbers = [1, 2, 3, 4, 5, 6]
numbers.indexOf(1) // 0  
numbers.indexOf(6) // 5
numbers.indexOf(7) // -1  

/* lastIndexOf: returns the index of the last occurance of an item in an array,
if the item isn't in the array, -1 is returned */
const numbers = [1, 2, 3, 4, 5, 6, 3, 2]
numbers.lastIndexOf(2) // 7
numbers.lastIndexOf(3) // 6
numbers.lastIndexOf(1) // 0
numbers.lastIndexOf(8) // -1

/* includes: checks if an item exists in array. returns true if it does, 
and false if it doesn't */
const numbers = [1, 2, 3, 4, 5, 6]
numbers.includes(1) // true
numbers.includes(4) // true
numbers.includes(12) // false

const countries = ['Uganda', 'Kenya', 'Zambia', 'Tanzania']
countries.includes('Uganda') // true
countries.includes('India') // false
countries.includes('zambia') // false -> it's case sensitive
countries.includes('Zambia') // True

/* To remove case sensitivity, you can make all array items
lowercase as well as the parameter being passed */
countries.map(x => x.toLowerCase()).includes('ZAmbiA'.toLowerCase())  // true
/* will discuss map later in the document */

/* Array.isArray(): checks whether the data type is an array
returns true if the data type is an array and false if not */
const word = 'baby'
Array.isArray(word) // false

const ages = [12, 88, 123, 98]
Array.isArray(ages) // true

/* toString: converts an array to a string */
const arrayOfwords = [ "I", "love", "JavaScript,", "HTML,", "CSS", "and", "React" ]
arrayOfwords.toString() // "I,love,JavaScript,,HTML,,CSS,and,React" 

/* join: used to join elements of an array and form a single string
it accepts an argument which is added between the items, by default the items
are separated by a comma */
const cars = ['Toyota', 'Audi', 'Chevrolet', 'Ferrari']
cars.join() // "Toyota,Audi,Chevrolet,Ferrari"
cars.join('') // "ToyotaAudiChevroletFerrari" 
cars.join(' ')// "Toyota Audi Chevrolet Ferrari" 
cars.join('@') // "Toyota@Audi@Chevrolet@Ferrari" 

/* slice: used to slice out elements from an array creating a new array,
the original array is not changed. Takes no, one or two parameters. 
If no paramter is added the whole array is copied. If one paramter is added,
the array is copied from the given index to the end of the array. If
two paramters are given: start index
and the end index but the element at the end index is not included */
const numbers = [5,1,2,3,4,8]
numbers.slice() // [ 5, 1, 2, 3, 4, 8 ] -> copies all elements
numbers.slice(3) // [ 3, 4, 8 ] 
numbers.slice(1, 4) // [ 1, 2, 3 ]


/* splice: it takes upto 3 paramters: starting index,
number of items to be removed and items to be added in that order. The method mutates
the array unlike the slice method that does not */
const countries = ['Uganda', 'Kenya', 'Zambia', 'Tanzania', 'India']
countries.splice(0) // countries = [] -> Removes all items
countries.splice(0,1) // countries = ['Kenya', 'Zambia', 'Tanzania', 'India'] -> Removes first country
countries.splice(3,1, 'Morocco', 'USA') 
//countries = [ "Uganda", "Kenya", "Zambia", "Morocco", "USA", "India" ] -> Removes 
// one item:Tanzania and replaces it with 'Morocco' and 'USA'

const numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(3, 3, 11, 12) // [ 1, 2, 3, 11, 12 ] -> Removes 3 items [4, 5, 6] and replaces
//it with 2 elements 11 and 12

/* Using the push method to add an item to an array */
/* push: adds an element to the end of mn existing array */
const countries = ['Uganda', 'Kenya', 'Zambia', 'Tanzania', 'India']
countries.push('Morocco')
countries // ['Uganda', 'Kenya', 'Zambia', 'Tanzania', 'India', 'Morocco']

const numbers = [1, 2, 3, 4]
numbers.push(6)
numbers // [1, 2, 3, 4, 6]


/* Using the pop method to remove an item from the end of array */

const countries = ['Uganda', 'Kenya', 'Zambia', 'Tanzania', 'India']
countries.pop() // "India" -> removed
countries // ['Uganda', 'Kenya', 'Zambia', 'Tanzania']

const numbers = [1, 2, 3, 4]
numbers.pop() // 4 -> removed
numbers // [1, 2, 3]

/* Adding an element to the beginning of an array */
/* this is accomplished with unshift */
const countries = ['Uganda', 'Kenya', 'Zambia', 'Tanzania', 'India']
countries.unshift('Morocco')
countries // ['Morocco', 'Uganda', 'Kenya', 'Zambia', 'Tanzania', 'India']

const numbers = [1, 2, 3, 4]
numbers.unshift(0)
numbers // [0, 1, 2, 3, 4]

/* Removing an element from the beginning of an array */
/* this is accomplished with shift */
const countries = ['Uganda', 'Kenya', 'Zambia', 'Tanzania', 'India']
countries.shift() // "Uganda" -> Removed
countries // [ 'Kenya', 'Zambia', 'Tanzania', 'India']

const numbers = [1, 2, 3, 4]
numbers.shift() // 1 -> removed
numbers // [ 2, 3, 4]

/* Reversing the order of an array */
const cities = ['London', 'Dublin', 'Madrid', 'Berlin']
cities.reverse()
cities //  [ "Berlin", "Madrid", "Dublin", "London" ]

const numbers = [0, 1, 2, 3, 4, 5]
numbers.reverse()
numbers // [ 5, 4, 3, 2, 1, 0 ]


/* sorting elements */
/* sort arranges elements in ascending order */
const cities = ['London', 'Dublin', 'Madrid', 'Berlin', 'Nairobi']
cities.sort() // [ "Berlin", "Dublin", "London", "Madrid", "Nairobi" ]


/* High Order Functions used to manipulate arrays */
/* They accept a callback function and include among the following
forEach, map, reduce, every, some, filter, find, findIndex, sort */
const numbers = [ 22, 1 , 4, 66, 78, 11, 18, 20, 23, 47, 123, 476]
const cities = ['London', 'Dublin', 'Madrid', 'Berlin']


/* forEach: used to iterate items of an array. Takes a call back function
with item, index and the array as parameters. The index and array are optional */
numbers.forEach((number, index, numbers) => {
    //uncomment to console log
    //console.log(number, index, numbers)
})

/* The shorter version that is often used */
numbers.forEach(number => {
    //uncomment to console log
    //console.log(number)
})
// 22
// 1
// 4
// 66
// 78
// 11
// 18
// 20
// 23
// 47
// 123
// 476

/* Find sum of all numbers */
let sum = 0
numbers.forEach(number => sum+=number)
sum // 889

cities.forEach(city => console.log(city))
// London
// Dublin
// Madrid
// Berlin



/* filter: filter out items of an array that fulfil conditions
and return a new array */
/* Filter out odd numbers */
const oddNumbers = numbers.filter(number => number%2 === 1)
oddNumbers // [ 1, 11, 23, 47, 123 ]

/* filter out cities whose name end in 'lin' */
const endInLin = cities.filter(city => city.endsWith('lin'))
endInLin // [ "Dublin", "Berlin" ]



/* map: returns a new modified array. Takes a call back function
with item, index and the array as parameters. The index and array are optional*/
/* create an array of square numbers */
const squareNumbers = numbers.map(number => number**2)
squareNumbers // [ 484, 1, 16, 4356, 6084, 121, 324, 400, 529, 2209, 15129, 226576 ]

const upperCaseCities = cities.map(city => city.toUpperCase())
upperCaseCities // [ "LONDON", "DUBLIN", "MADRID", "BERLIN" ]

 
/* Reduce: Takes a callback function. The callback takes accumulator, current and
an optional initial value as parameters and returns a single value. If our array is
empty, javascript will throw an error. if the initial value is not specified, accumulator
will use the first item of the array by default */
const sum = numbers.reduce((x, y) => x + y, 0)
sum // 889


/* every: checks if all items in an array satisfy the given condition, returns a boolean */

/* checking if all items in the cities array are of the type string */
const allCities = cities.every(city => typeof(city) === 'string')
allCities // true

/* checking if all items in the numbers array are odd */
const checkNumbers = numbers.every(number => number%2 === 1)
checkNumbers // false


/* some:  checks if some items in an array satisfy the given condition, returns a boolean */
/* checking if all items in the numbers array are odd */
const checkNumbers = numbers.some(number => number%2 === 1)
checkNumbers // true

/* checking if the length of any of the cities is 20 */
const boolCities = cities.some(city => city.length === 20) 
boolCities // false


/* find: returns the first element that satisifies the condition */
const drinks = ['tea', 'coffee', 'water', 'wine']
let tea = drinks.find(drink => drink === 'tea')
tea // tea

const ages = [14, 22, 25, 32, 35, 18]
let youngest = ages.find(age => Math.min(age))
youngest // 14


/* findIndex: returns the index of the first element that satisfies the condition */
const ages = [14, 22, 25, 32, 35, 18]
let indexOfYoungest = ages.findIndex(age => Math.min(age))
indexOfYoungest // 0


/* sort: arranges items in either ascending or descending order, by default
sorts items as strings */
/* sorting string elements */
const names = ['David', 'Anne', 'Jude', 'Judas', 'Ann']
names.sort() // [ "Ann", "Anne", "David", "Judas", "Jude" ]

/* sorting numeric elements */
const numbers = [2, 4, 1, 11, 22, 8]
numbers.sort() // [ 1, 11, 2, 22, 4, 8 ] -> wrong answer

numbers.sort((x, y) => x - y) // [ 1, 2, 4, 8, 11, 22 ] -> correct answer
numbers.sort((x, y) => y - x) //  [ 22, 11, 8, 4, 2, 1 ] -> descending order


/* sorting object arrays */
const athletes = [
        {
            name: 'James',
            age: 37
        }, {
            name: 'Mahomes',
            age: 26
        }, {
            name: 'Zlatan',
            age: 41
        }, {
            name: 'Haaland',
            age: 22
        }, {
            name: 'Kylian',
            age: 23
        }
]

athletes.sort(function(x, y){
    if(x.age < y.age) return -1
    if(x.age > y.age) return 1
    return 0    
})

or 

athletes.sort(function(x, y){
    if(x['age'] < y['age']) return -1
    if(x['age'] > y['age']) return 1
    return 0    
})

athletes   /* [
              {
                "name": "Haaland",
                "age": 22
              },
              {
                "name": "Kylian",
                "age": 23
              },
              {
                "name": "Mahomes",
                "age": 26
              },
              {
                "name": "James",
                "age": 37
              },
              {
                "name": "Zlatan",
                "age": 41
              }
            ] */














