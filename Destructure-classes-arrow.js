/*
Instructions 
Use the built in filter method to filter over the jobs array of objects and return the object of the person with a job as a programmer. Make sure to use the arrow function in conjunction with the filter method.  
*/

var jobs = [{receptionist: "James"}, 
            {programmer: "Steve"},
            {designer: "Alicia"}];

var solution = jobs.filter((job) => job.programmer);

var numbers = "TBD";


/*
Inside the evens function use the built in filter method to filter over the array called numbers and return a new array with only the even numbers. Make sure to use the arrow function combined with the filter method.
*/

var evens = () => {
  return numbers.filter(num => num % 2 === 0)
}


/*
Inside the startWithLetterA function use the built in filter method to filter over the array called strings and return a new array with only the strings that start with a letter "a". Make sure to use the arrow function combined with the filter method.  
*/

var strings = "TBD";

var startWithLetterA = () => {
  return strings.filter(letter => letter.charAt(0) == 'a')
}


/*
Inside the formalGreeting function use the built in .map method to map over the array called names and return a new array with "Hello, " appended to the beginning of each name. Make sure to use the arrow function combined with the map method.  
*/

var names = "TBD";

var formalGreeting = () => {
  return names.map(names => "Hello, " + names)
}


/*
Inside the productOfArray function use the built in reduce method to loop over the array called numbers and return the product of all the numbers in the array. Make sure to use the arrow function combined with the reduce method.    
*/

var numbers = "TBD";

var productOfArray = () => {
  return numbers.reduce((x,y) => x * y)
}


/*
Create a class called Puppy.

The class should have a constructor that accepts three parameters: happiness, energy, and behavior.
*/

class Puppy{
    constructor(happiness, energy, behavior){
      this.happiness = happiness;
      this.energy = energy;
      this.behavior = behavior
    }
}

var Charles = new Puppy(100, 200, 300)


/*
Create a class called Car that creates two properties on each Car object.

The first property should be called manufacturer and the second property should be called year.

The class should also have a method called displayManufacturer that returns the manufacturer.

It should also have a method called displayYear that returns the year.
*/

class Car {
    constructor(manufacturer, year){
    this.manufacturer = manufacturer;
    this.year = year;
    }
    displayManufacturer(){
      return this.manufacturer;
    }
    displayYear(){
      return this.year;
    }
}
  
  
var BillysFirstCar = new Car('Tesla', 2017)
BillysFirstCar.displayManufacturer();
BillysFirstCar.displayYear();


/*
The class Puppy needs two methods.

The getsTreats method should accept one parameter, the number of treats. It should increase happiness by 20 for each treat received, then return the new happiness value.

The takesNap method should decrease energy by 45 and increase behavior by 15.

Make sure you make the puppy take his nap in order to change his energy and behavior levels.
*/

class Puppy {

    constructor(happiness, energy, behavior) {
      this.happiness = happiness
      this.energy = energy
      this.behavior = behavior
    }
  
    getsTreats(num) {
      return (num * 20) + this.happiness
    }
  
    takesNap() {
      this.energy = this.energy - 45;
      this.behavior = this.behavior + 15;
    }
}
  
var Charles = new Puppy(75, 25, 30)
Charles.takesNap()
  

/*
Here you are given the object animalCount. Destructure this object so that you have 3 distinct variables with the values of the matching properties from animalCount.
*/

var animalCount = {
    cats: 2,
    dogs: 5,
    mice: 0
}
  
var {cats, dogs, mice} = animalCount;


/*
Using object literal to assign values. 

Create an object literal to assign the variables students, mentors and instructors a value through destructuring. Set the value of students to be 24, mentors to be 3, and instructors to be 5.
*/

var {students, mentors, instructors} = {students: 24, mentors: 3, instructors: 5}


/*
Create an object named languages. Give it the properties 'french', 'english' and 'spanish'. Give these properties the value true if you speak the language, false if you do not.
Use destructuring to assign the values of these properties to new variables.
Important: Let and const do not register with Replit's unit testing. You must use var or the tests will fail.
*/

var languages = {french: false, english: true, spanish: false, }

var {french, english, spanish} = {french: true, english: false, spanish: true, }


/*
Write a function called subtraction with an object parameter. The object passed in this function will have the property names num1 and num2. Use object destructuring to assign the values of these properties to new variables. Subtract num2 from num1 and return the result. 
*/


// **Example**

var nums = {
   one: 1,
   two: 2,
   three: 3
}

var addition = (obj) => {
   var {one, two, three} = obj;
   var total = one + two + three;
   return total
}

addition(nums)


var subtraction = (obj) => {
    var {num1, num2} = obj;
    var total = num1 - num2
    return total
}
  
  
/*
Create a function called zooAnimals that will take an object parameter. The object passed to this function will have the property names lion, tiger, and bear. The values of these properties will be a number representing the count of that animal in the zoo. Using object destructuring, return the value of all of these properties combined.
*/

var zooAnimals = (obj) => {
    var {lion : num1, tiger : num2, bear : num3,} = obj
    var total = num1 + num2 + num3;
    return total
}


// ******* Example ******* 

// var immediatelyDestructured = ({one, two, three}) => {
//   return one + two + three
// }

// immediatelyDestructured({one: 1, two: 2, three: 3})

// ******* Write code below ******* 

var greeting = ({name, title}) => {
    return 'Hello, ' + title + ' ' + name + '!'
};


/*
Create a function called truthyFalsy that takes a destructured object as it's parameter.The properties of this object will be number and string. One of these properties will be truthy, the other will be falsy. Return the value that is truthy.
*/

var truthyFalsy = ({number, string}) => {
    if (string){
      return string;
    } else {
      return number;
    }
};