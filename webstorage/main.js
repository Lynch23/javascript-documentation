// Web storage consists of sessionStorage and localStorage
/* sessionStorage is available within a browser tab and is lost once the browser tab
 is closed */
/* localStorage stores data in the browser with no expiration date, it persists over different
browser tabs and is not lost when the browser tab is closed */

/* Web Storage can be used for
- user authentiation
- storing products of a shopping cart 
*/

// Setting item to the localStorage
/* syntax 
localStorage.setItem('key', 'value')
*/
localStorage.setItem('name', 'Thierry')
//console.log(localStorage) // -> { name: "Thierry", length: 1 }

// Storing arrays and objects to local Storage, one has to first stringfy the object 
const colors = ['Yellow', 'Green', 'Red']
localStorage.setItem('colors', JSON.stringify(colors))
//console.log(localStorage) // -> { name: "Thierry", colors: "[\"Yellow\",\"Green\",\"Red\"]", length: 2 }

const person = {
	name: 'Madison',
	height: 157,
	favoriteColor: 'green'
}
localStorage.setItem('person', JSON.stringify(person))


// Retrieving Item from local Storage
/* syntax 
localStorage.getItem('key')
*/
let name = localStorage.getItem('name')
//console.log(name) // -> Thierry

// JSON.parse is used on the retrieved data from local storage to parse it to a normal
// Array or Object


let retrievedColors = JSON.parse(localStorage.getItem('colors'))
let retrievedPerson = JSON.parse(localStorage.getItem('person'))
//console.log(retrievedColors) // -> [ "Yellow", "Green", "Red" ]
//console.log(retrievedPerson ) // -> { name: "Madison", height: 157, favoriteColor: "green" }

// Display a given key of data stored in localStorage
/* syntax 
localStorage.key()
*/

localStorage.key(0) // -> 'name'

// Removing an item from local Storage
/* syntax 
localStorage.removeItem('key')
*/
localStorage.removeItem('colors')
console.log(localStorage)
// -> { name: "Thierry", person: "{\"name\":\"Madison\",\"height\":157,\"favoriteColor\":\"green\"}", length: 2 }
// -> colors has been removed

// Clearing  everything from local Storage
//localStorage.clear()

// For sessionStorage use the examples above by replacing localStorage with sessionStorage
