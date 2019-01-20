/* Make a function called favFood that does not take in any parameters.
The function should return a string that has a value of  "My favorite food is pizza"
Instead of explicitly typing "pizza", make reference to the existing variable called food.

Use template strings.
Do not use concatenation ("My favorite food is " + food)
*/

var food = "pizza";

function favFood(){
  return `My favorite food is ${food}`
}

/*
Instructions

Create an array called dataTypes
dataTypes should have the following items:
- the number 42
- the string "meaning"
- the boolean true
- an array with 5 numbers
- the object spaceship
- the function launch
*/

var spaceship = {
    fuel: "liquid hydrogen",
    topSpeed: 36000,
    fuelLevel: 100,
    altitude: 0
  }
  
  function launch(){
    spaceship.fuelLevel -= 30;
    spaceship.altidude += 1000
  }
  
var dataTypes = [42,"meaning",true,[1,2,3,4,5],spaceship,launch]
  



