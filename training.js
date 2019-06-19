1.

const arr = [2, 3, 4];
arr.unshift(0, 1);
arr.push(5, 6, 7);
arr; // => [0, 1, 2, 3, 4, 5, 6, 7]

// Array inside of an Array

arr.push([8, 9, 10]);

// To make the array within the array become normal elements we use flat method

arr.flat();

arr; // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


2.

const arr = [5, 7, 9];
arr.push(6);

arr; // => [5, 7, 9]



3.

const numbers = [4, 9, 7, 2, 1, 8];
for(var i=0; i<numbers.length; i++) {
	numbers[i] = numbers[i] * 2;
}

numbers; // => [8, 18, 14, 4, 2, 16]


4.

const numbers = [4, 9, 7, 2, 1, 8];
for(var i=0; i<numbers.length; i++) {
    if (numbers[i] % 2 == 0){
        numbers[i] = numbers[i];
    }
    else {	numbers[i] = numbers[i] * 2; }
}

numbers; // => [8, 18, 14, 4, 2, 16]


5.

//Create an array to hold your favorite colors. For each choice, log to the screen a string like: My #1 choice is blue.
const favColors = ['Green', 'Black', 'Blue', 'Pink', 'White'];
for(var i=0; i<favColors.length; i++){
    favColors[i] = `My #${i+1} choice is ${favColors[i]}.`
}

favColors;


6.

//Create an array of ages. Loop through and log only the ages that are over 21.
const ages = [12, 18, 20, 23, 34, 40, 9];
for(var i=0; i<ages.length; i++){
    if(ages[i] > 21){
        ages[i] = ages[i];
    } else ages[i] = ``;
}

ages;


7.

// Starting with an empty array called rainbowColors:
// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
// Print the length of the array
// Print the second item
// Print the last item (make this flexible/dynamic!)
// Print the index of the string "blue"
const rainbowColors = [];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', 'indigo', 'violet');
rainbowColors.length;
rainbowColors[1];
rainbowColors[rainbowColors.length-1];
rainbowColors.indexOf('blue');


8.

// Find out the difference between .slice and .splice

// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
const twoColors = [rainbowColors.slice(1,3)];
twoColors.flat();

nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums1 = [nums.splice(3,3)];
nums;


9.


// Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
// Access "inner array first item" and print it out"
// Print "third" by using a dynamic index
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
arrOfArrs[0][0];
arrOfArrs[1][arrOfArrs.length];





10.


// Create an array to hold your top five choices of something (music, books, movies, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
const favMovies = ['Fight Club', 'Lord of The Rings Trilogy', 'Mr.Nobody', 'Eternal sunshine of the spotless mind', ''];
const suffix = ['st', 'nd', 'rd', 'th', 'th'];
for(var i=0; i<favColors.length; i++){
    favColors[i] = `My #${i+1} choice is ${favColors[i]}.`
    favColors[i] = `BONUS: My ${i+1}${suffix[i]} choice is ${favColors[i]}.`
}









