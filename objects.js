/*
Problem
Here we have a function called objectLooper that will take a number object and loop over it.  Inside this loop, change the value of each property to 0.
*/

var number = {
    age: 30,
    score: 100,
    length: 12,
    year: 2016
}

function objectLooper(number) {
    for(var key in number) {
         if(number.hasOwnProperty(key)){
               number[key] = 0; 
            }
    }
  return number;
}

/*
Check each value inside the prewritten for in loop. If a value is greater than 3,000,000 set it to 0.
*/

var state = {
    utah: 2942902,
    texas: 26956958,
    california: 38802500
};


function stateLooper(arr) {
    for(key in arr) {
      if(arr[key] > 3000000){
        arr[key] = 0;
      }
        
    }
  return arr
}

/*
Problem
Here is a function named cleanUser that will be passed an object. Inside of this function, loop over the object so that every property with a falsy value is removed. Once all falsy values and their properties are removed, return the object.
*/  

function cleanUser(obj) {
	for(key in obj){
	  if (obj[key] === false){
	    delete obj.key
	  }
	}return obj
}

/*
Create a function called zeroOut that takes a user object and loops over that object to change all the object property values to 0. Return the updated user object.
*/

function zeroOut(obj){
    for (key in obj){
      if(obj.hasOwnProperty(key)){
        obj[key] = 0;
      }
    }return obj
  }

/*

*/

var object = {
    name: 'Joseph'
}

var obj2 = Object.assign({}, object)

var employees = {
    tom: 'designer',
    chris: 'engineer',
    james: 'developer',
}

var employeeRoles = [];

for (var prop in employees){
    employeeRoles.push(employees[prop])
}

class Burger{
    constructor(layers){
        this.layers = layers;
        this.percentLeft = 100;
    }   
    eat(){
        this.percentLeft --;
    }
}   

class Tree{
    constructor(height){
        this.height = height;
        this.food = 'photosynthesis';

    }
    grow (){
        this.height++;
    }
}

var oak = new Tree(10)
oak.grow();
