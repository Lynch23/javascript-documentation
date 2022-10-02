// prototypes

String.prototype.alertMe = function() {
	alert(this.toUpperCase());
} // this adds a function called alertMe to the string prototype, which is turn makes all strings be able to reference this method

Array.prototype.changeFirstElement = function() {
	this[0] = 'changed'
} // this adds a function called 'changeFirstElement' to the array prototype, which in turn, all arrays can referrence this method

// use of prototypes and the 'new' keyword
// given the example below of a function that constructs an object

function makeColor(r,g,b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	}

}

// we can achieve the same functionality by using a contructor function as follows;

function Color(r ,g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}
Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
} // adds the method to the prototype object as a reference to the same function

const white = new Color(r, g, b);
// when the contructor function is called with the new keyword, 
// it creates a blank, plain JavaScript object,
// points the new object's prototype to the constructor function's prototype property, 
// executes the constructor function with the given arguments, binding new object as the 'this' context
// if the contructor function returns a non-primitive, this return value becomes the return of the whole expression
// otherwise the new object created by the constructor is returned instead.
//
// constructor keyword - we can add more syntactic sugar to the same code by using classes and the constructor keywords
//

class Color {

	constructor(r, g, b) {
		this.r = r;
		this.g = g;
		this.b = b;
	}
	rgb() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	}
}

// 'super' and 'extends' keywords

class ColorRGBA extends Color {
	constructor(r, g, b, a) {
		super(r, g, b);
		this.a = a;
	}
	rgba() {
		const { r, g, b, a } = this;
		return `rgba(${r}, ${g}, ${b}, ${a})`;
	}
}
