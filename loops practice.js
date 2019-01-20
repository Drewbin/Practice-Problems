/*
Object for in loops
For in loop: loop that runs a block of code of each of an object's own properties.
Syntax: for (var prop in myObj){
    myObj[ prop ];
}
prop = variable that will stand for each property key
myObj = object to loop through
myObj[ prop ] = the property key variable can be referred to inside the loop (USE BRACKET NOTATION)

*/

var favorites = {
    color: 'red',
    flavor: 'vanilla'
};

for (var key in favorites){
    console.log(favorites[key]);
}


var employees = {
    tom: 'designer',
    chris: 'engineer',
    james: 'developer'
}

var employeeNames = [];

for ( var prop in employees ) {
    console.log(employeeNames.push( prop )); 
}
//final value of employeeNames will be ['tom', 'chris', 'james', ]

var employeeRoles = [];

for (var prop in employees){
    employeeRoles.push(employees[ prop ]);
}
//var employeeRoles will now contain ['designer', 'engineer', 'developer',]

var payroll = {
    josie : 400,
    mark: 380,
    tonya: 200, 
    miguel: 250
}

for (var prop in payroll){
    payroll[prop] = 300;
}
//the final value of var payroll will have every value set to 300

var suitcase = {
    shirt: 'white',
    tie: 'skinny', 
    jeans: 'black'
};

for(var prop in suitcase){
    delete suitcase[ prop ];
}
//Final value of suitcase will be an empty object


/* Array for loop

Syntax: for (var i = 0; i < 10; i++){
    var i = 0:(initialization) where to start the loop. i < 10:(condition) how many times to run the loop. i++:(final statement) add 1 to i and do the code again, evaluated after loop runs, used to increment counter.
}
*/

var threeHellos = [];

for (var i = 0; i < 3; i++){
    threeHellos.push('hello');
} //pushes 'hello' into array 3 times

var countToThree = [];

for (var i = 0; i < 3; i++){
    countToThree.push(i);
}//pushes 1, 2, 3, to the array

var nums = [2, 31, 47, 16];

var evenNums = [];
for (var i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0){
        evenNums.push(nums[i])
    }
}
console.log(evenNums);

/*
Given an array of user objects, update the user's email property if the condition is met.
*/
var user0 = {
    name: 'James',
    email: null,
    flag: true
}

  function updateUserEmail( array, property, value, newEmail ) {
    for( var i = 0; i < array.length; i++ ) {
      if ( array[i][property] === value ) {
        array.email = newEmail
      }
    }
    return array;
}
  

/*
Given an array of user objects, loop through the users and check to see they have a given property that equals a given value. If that user object does, then update its password to the value of newPassword.
*/

function changePassword( array, property, value, newPassword ) {
    for( var i = 0; i < array.length; i++ ) {
      if (array[i][property] === value){
          array[i].password = newPassword
      }
    }
    
    return array;
}


/*
Create a function called updateUserInfo that has five parameters (array, propertyKey, propertyValue, newEmail, newName ). You can assume that array will always be an array of objects. Loop through array and if any objects have a property name of propertyKey that has the value of propertyValue, update that object's email and name properties to the values of newEmail and newName. Then return array.
*/

function updateUserInfo(array, propertyKey, propertyValue, newEmail, newName){
    for (var i = 0; i < array.length; i++){
        if (array[i][propertyKey] === propertyValue){
            array[i].email = newEmail;
            array[i].name = newName;
        }
    }return array;
}


/*

*/