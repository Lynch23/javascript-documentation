//jQuery is a JavaScript Library.

//jQuery greatly simplifies JavaScript programming.

//jQuery is easy to learn.


 /* jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

  The jQuery library contains the following features:
  
  HTML/DOM manipulation
  CSS manipulation
  HTML event methods
  Effects and animations
  AJAX
  Utilities*/
 
  
// We have to install jQuery or we can use CDN. Here I have used CDN


// --->>> Basic syntax is: $(selector).action()

/*    A $ sign to define/access jQuery
      A (selector) to "query (or find)" HTML elements
      A jQuery action() to be performed on the element(s)*/


//  --->>> You might have noticed that all jQuery methods in our examples, are inside a document ready event:

$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();            //$(this).hide() - hides the current element.
    });
  });

// ---->>> jQuery selectors are one of the most important parts of the jQuery library.

//You can select all <p> elements on a page like this:

$("p")

// --->>> The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.

$("#test")

//--->>> The jQuery .class selector finds elements with a specific class.

$(".test")

// some more selector:  
/*

$("*")	-- Selects all elements	
$(this)	-- Selects the current HTML element	
$("p.intro")	-- Selects all <p> elements with class="intro"	
$("p:first")	-- Selects the first <p> element	
$("ul li:first")	-- Selects the first <li> element of the first <ul>	
$("ul li:first-child")	-- Selects the first <li> element of every <ul>	
$("[href]")	-- Selects all elements with an href attribute 

*/
