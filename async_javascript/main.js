// async javascript covers the use of callbacks, promises, async functions to run asynchronous code.


// the callstack
// javascript is a single threaded language, this means it can only run one line of code at a time. When more calculations/operations are to be run, they are added to the 'callstack'
// the callstack is what javascript uses to keep track of its place in a script that calls multiple functions.
// when a script calls a function, the interpreter adds it to the callstack and then starts carrying out the function.
// any functions that are called by that function are added to the call stack further up
// when the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing

// example
//
const multiply(x, y) {
	 return x*y;
 }
const square(x) {
	return multiply(x,x);
}

const isRightTriangle(x, y, z) {

	return square(x) + square(y) === square(z);
}

// when the isRightTriangle function is ran, it calls square function three times, then square calls multiply
// the isRightTriangle is added first to the callstack
// then square is called and added to the callstack, as it does not return a value directly but calls another function multiply, which is added to the callstack
// once the multiply function returns a value, it is then removed from the callstack, this same sequence happens until we get a value returned by the isRightTriangle function

// callbacks and promises
// to demonstrate the 'callback hell' 
// consider the code
setTimeout(() => {
	console.log('Do something');
	setTimeout(() => {
		console.log('Do something for the second time');
		setTimeout(() => {
			console.log('Do something again, third time');
		}, 1000)
	}, 1000);
}, 1000);


// to achieve the same functionality, we can put this logic inside a function

const delayTask = (delay, doNext) => {
	setTimeout(() => {
	console.log('Do something');
	doNext && doNext();
	}, delay);
}

// we can run this function and nest in the next code to run and it would work the same way
// in this example we pasted in a callback to the delayTask function, which is scheduled to execute when delay times out.

delayTask(1000, () =>{
	delayTask(1000, () => {
		delayTask(1000);
	})
})
// this function will print 'Do something to the console every 1 second for every callback passed into the delayTask function'
// this logic can be applied to a common pattern, consider a function that sends a request to some server, 'fake request in this example';
//
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connnection timed out!');
        }
        else {
            success(`Here is your data from, ${url}`);
        }
    }, delay)
};

// we can call this function to run and pass in callbacks to be executed at succes or failure of our fake request
//


fakeRequestCallback('books.com',
    function (response) {
        console.log(response);
        fakeRequestCallback('books.com/page1', function(res) {
            console.log(res);
            fakeRequestCallback('books.com/page2', function(res) {
                console.log(res);
            }, function(err3) {
                console.log(err3);
            })
        }, function(err2) {
            console.log(err2);
        });
    },
    function (err1) {
        console.log(err1)
    }
)
// this pattern is valid code, but we would run into problems with all the nesting 
// the same pattern can be written cleaner with the use of promises

// promises
//
// a promise is an object representing the eventual completion or failure of an asynchronous operation.

new Promise((resolve, reject) => {
	resolve(); // this returns a resolved promise object

})

new Promise((resolve, reject) => {
	reject(); // this returns a rejected promise object
})


 const fakeRequestPromise = (url) => {
	 return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4000) + 500;
		 setTImeout(() => {
		 if(delay > 4000) reject('Connection Timeout');
		else resolve(`Here is your fake data from ${url}`);
		 }, delay)

	 })
 };

const req = fakeRequestPromise('example.com'); //this returns an object (a promise, resolved/rejected)

//then we can run code depending on whether the promise was resolved or rejected by chaining '.then and .catch methods to the promise'

req.then(() => {
	console.log('First promise resolved'); // this will run when the promise is resolved
	fakeRequestPromise('example2.com')
	.then(() => {
		console.log('Second promise resolved!!');
		//we can then nest in more code to run when the second promise resolves below this line
	})
	.catch(() => {
		console.log('Second promise rejected!');
	});
	// we can then add more code below this line to be executed when the first promise is resolved
})
.catch(() => {
	console.log('first promise rejected'); // this will run when the promise is rejected
	// more code to run when the promise is rejected
});

// and to further avoid nesting, we can return a promise with every successful request

const request = fakeRequestPromise('fakerequest.com');

request
.then((res) => {
	console.log('First request resolved!', res)
	return fakeRequestPromise('fakerequest.com/page2')
})
.then((data) => {
	console.log('Second request resolved!', data);
	return fakeRequestPromise('fakerequest.com/page3');
})
.then((res) => {
	console.log('Third request resolved', res);
})
.catch(e => {
	console.log('Caught an error with a request', e);
};

// with this pattern we were able to achieve the same functionality, but without any nesting
// we instead chained .then and .catch methods onto the promise object, and they ran depending on where the promise was resolved or rejected
//
// async functions
// // with this pattern we were able to achieve the same functionality, but without any nesting
// we instead chained .then and .catch methods onto the promise object, and they ran depending on where the promise was resolved or rejected
//
// async functions and await keyword
// an async function is a function declared with the async keyword, and the await keyword is permitted within it 

// an example use of an async function

const resolveAfter2Seconds = () => {
	return new Promise(resolve = > {
		setTimeout(() => {
			resolve('Promise resolved!');
		}, 2000);
	});
}

const makeAsyncCall = async() => {
	console.log('Calling');
	const result = await resolveAfter2Seconds();
	console.log(result);
}

makeAsyncCall();

// and to handle errors within an async function, we can wrap the code inside a try and catch

const asyncCall = async() => {
	try {
		console.log('Calling');
		const result = await resolveAfter2Seconds();
		console.log(result);
	}
	catch (e) {
		console.log('Errored out', e);
	}
};
asyncCall();
