// dom events
// we can listen for dom events on a window by adding event handlers, such as onclick, onhover, onmouseover etc
// there are three main ways we can add these event handlers
// inline within the html code
// adding a script tag inside the html body tag
// linking a script.js file to the .html file

const btn = document.querySelector('#btn');

btn.onclick = function () {
	console.log("Clicked");
}; // we added a click event handler to the button in our document.
// we achieved this by assigning a function on the button's onclick property
// we can do the same for other events for different dom elements

// addEventListener
// The addEventListener() method of the event target interface sets up a function that will be called whenever the specified event is delivered to the target.
//
// we can use the same button to add a doubleclick handler

btn.addEventListener('dblclick', function() {console.log('Double clicked!')});
// we specify a callback that will run when the specified event is delivered to the dom element.
// the advantage with the addEventListener, we are able to add multiple event handlers for the same event
// something we wouldn't achieve with the onclick property

btn.addEventListener('click', function() {console.log('Clicked!'), { once: true }}) // this will run only for the first time and remove the event listener from the element
btn.addEventListener('click', function() {console.log('Clicked again')});

// if we tried this by assigning separate callbacks to the onclick property, we
 // would be overwriting the previous callback passed
//
// Note: The addEventListener() method is the recommended way to register an event listener. The benefits are as follows:

// It allows adding more than one handler for an event. This is particularly useful for libraries, JavaScript modules, or any other kind of code that needs to work well with other libraries or extensions.

// In contrast to using an onXYZ property, it gives you finer-grained control of the phase when the listener is activated (capturing vs. bubbling).
// It works on any event target, not just HTML or SVG elements.
//
// keydown events
// we can also listen for key press events on inputs and the window object
// here's an example
window.addEventListener('keydown', function (e) {
    console.log('the key pressed is, ', e.key);
})
// using the event object 'e' passed to the callback, we are able to identify the specific key pressed
