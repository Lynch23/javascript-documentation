// section on making requests to an API, covers XML request, fetch API and Axios// in this section, the star wars API will be used to make requests
// making an XMLHttprequest
const req = new XMLHttprequest(); // makes the request object 

req.open('GET', 'https://swapi.dev/api/people/1'); // opens the request
req.send(); // sends the request

req.onload = function() { 

	console.log('The request worked');
	const data = JSON.parse(this.responseText);
	console.log(data);
} // on success callback

req.onerror = function() {

	console.log('Error!');
	console.log(this);
} // an error handling callback

// fetch API
// a more neo way of making request via JS is the fetch API function;
// this supports promises and cleans up the nesting when making subsequent requests

fetch('https://swapi.dev/api/people/1'); 
// this line above returns a promise which is resolved IMMEDIATELY the fetch method receives any headers
// the result of this is the result body may not have all the data from the api endpoint
// to avoid this, there is a method on the promise returned by fetch called .json()
// this will parse the data and return a promise resolved with the data received by the fetch method

// example

fetch('https://swapi.dev/api.people/1')
.then(res => {
	console.log('Request resolved',res); // this line returns a promise
	res.json()
		.then(data => console.log(data))
		.catch(e => console.log('Data not parsed', e)) 
	// returns a promise resolved once the response has been parsed
	// rejected once the response ran into a parsing error

})
.catch(e => {console.log('Request rejected', e)})

// the fetch method returns a promise, then the data has to be parsed with .json() method which also returns a promis.
// we can then chain on series on .then for any subsequent requests or code on the .json method as seen in the example

// example

fetch('https://swapi.dev/api/people/2')
.then(data => {
	return data.json();
})
then(data => {
	console.log('returned data', data);
	return fetch('https://swapi.dev/api/people/2') // subsequent request
})
.then(data => {
	return data.json();
})
.then(data => {
	console.log(data)
});
// the same functionality can be attained by using async functions

const loadFromApi = async() => {
	try {
	const data = await fetch('https://swapi.dev/api/people/1');
        const res = await data.json()
        console.log(res);
	}
	catch (e) {
		console.log('Caught an error!');
	}
}
loadFromApi();

 // axios 
//  axios is a library containing methods to send requests
//  sending a get request

axios.get('https://swapi.dev/api/people/1')
.then(res => {
	console.log(res)
})
.catch(e => console.log('Error!', e));

// the axios.get method returns a promise with the data already parsed into the request object
//
// using an async function

const loadApi = async() {

	const res = await axios.get('https://swapi.dev/api/people/1');
	console.log(res.data);
}

loadApi();

