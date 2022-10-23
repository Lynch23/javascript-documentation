// will add information about different types of loops in javascript
const test = document.getElementById("test")

// Loops are used to perform the same task numerous times without writing repetitive code

// One of the first loops you will learn in JavaScript is the 'for loop'
// Say we had an a set of numbers held in an array and we wanted to double each of them.

const arrOfNums = [1, 2, 3, 4, 5]

// we could double each of them one by one like this

const arrOfNumsDoubled = [];

arrOfNumsDoubled[0] = arrOfNums[0] * 2
arrOfNumsDoubled[1] = arrOfNums[1] * 2
arrOfNumsDoubled[2] = arrOfNums[2] * 2
arrOfNumsDoubled[3] = arrOfNums[3] * 2
arrOfNumsDoubled[4] = arrOfNums[4] * 2

test.textContent = arrOfNumsDoubled;

// we can save time and lines of code with a loop

for (let i = 0; i < arrOfNums.length; i++) {
    arrOfNumsDoubled.push(arrOfNums[i] * 2)
}

test.textContent = arrOfNumsDoubled;