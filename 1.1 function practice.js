/*
Create a function called "fn" that takes in a parameter and returns that parameter.
*/

var fn = (para) => {return para}


/*
Write a function called createName.
The function should return a single string value, which will be the result of concatenating the existing variables firstName and lastName.

NOTE: the returned value should have a space between the original two strings

For example, with the existing variable values, createname should return "Jeremy Robertson"
*/

var firstName = "Jeremy";
var lastName = "Robertson";

var createName = () => {return firstName + " " + lastName}


/*
Create a function called showMeSeven that returns the number 7.
*/

var showMeSeven = () => {return 7}


/*
Create a function called multiplier that has two parameters (these will be numbers).
The function should return the product of the two numbers.
*/

var multiplier = (x,y) => {return x * y}


/*
Create a function called makeExercise that has two parameters-- exerciseName(string) and duration(number).
The function should return an object with two key-value pairs. The first property name should be "exerciseName" with a value of the first parameter. The second property name should be "duration" with a value of the second parameter.
*/

function makeExercise(str,num){
    return {exerciseName: str, duration: num}
}


