/*
Instructions

Inside the isOldEnough function write an if/else statement that will return "old enough" if the variable  age is greater than 21 and return "not yet" other wise.

Use the if and else keywords in your final solution.
The variable age will be changed during testing.
var age = "TBD";
*/

function isOldEnough(){
    if (age > 21){
      return "old enough"
    
    }else{
      return "not yet"  
    }
}


/*
Instructions

Inside the successPredictor function write an if/else statement that will return "success at DevMountain" if the variable  workEthic is equal to "great" and return "failure at DevMountain" otherwise.  
*/

var workEthic = "TBD";

function successPredictor(){
  if (workEthic == "great"){
    return "success at DevMountain"
  } else {
    return "failure at DevMountain"
  }
}


/*
Instructions 

Inside the eatOrTrash function write an if/else statement that will return "throw in trash" if the variable cookieType is equal to "raisin" and return "eat" other wise. 
*/

var cookieType = "TBD";

function eatOrTrash(){
  if (cookieType == "raisin"){
    return "throw in trash"
  } else {
    return "eat"
  }
}


/*
Instructions 

Inside the finalScore function write an if/else statement that will return "we are the champions" if the variable myTeamScore is greater than the variable yourTeamScore and return ":(" otherwise. 
*/

var myTeamScore = "TBD";
var yourTeamScore = "TBD";

function finalScore(){
  if (myTeamScore > yourTeamScore){
    return "we are the champions"
  } else {
    return ":("
  }
}


/*
Inside the findCorrectTransportation function write an if/else statement that will return check the variable age and return the correct response according to the following criteria.
*/

var age = "TBD";

function findCorrectTransportation(){
  if (age >= 3 && age <= 7){
    return "tricycle"
  } else if (age >= 8 && age <= 15){
    return "bicycle"
  } else if (age >= 16){
    return "car"
  }
  
}


/*
Instructions 

Inside the doIGetIceCream function write an if/else statement that will return check the variables money and temp and return the correct response according to the following criteria.
 
If temp is equal to "hot" and money is true return "Get Ice Cream!".
Otherwise return "Save up for another day.".
Use the if and else keywords in your final solution.
The variable temp will always be a string and will change during testing.
The variable money will always be true or false and will change during testing.
*/

var temp = "TBD";
var money = "TBD";

function doIGetIceCream(){
  if (temp == "hot" && money === true){
    return "Get Ice Cream!"
  } else {
    return "Save up for another day."
  }
}


/*
Instructions 

Inside the doIHaveFreeTime function write an if/else statement that will return "free time!" if either chores or work are false. Use the logical NOT operator(bang operator) to complete this problem.
 
Do not use the true of false keywords in your final solution.
Use the if and else keywords in your final solution.
The variables chores and work will always be a true or false and be changed during testing. 
*/

var chores = "TBD";
var work = "TBD";

function doIHaveFreeTime(){
  if(!chores || !work){
    return "free time!"}
}


/*
Inside the setCrash function write an if/else statement that will set the value of crash to true if currentSpeed if equal to "fast" and brakes are false. Otherwise do nothing.

Use the if and else keywords in your final solution.
The variable currentSpeed will always be a string and will change during testing.
The variable brakes will always be true or false and will change during testing.
*/

var currentSpeed = "TBD";
var brakes = "TBD";
var crash = false;

function setCrash(){
  if (currentSpeed == "fast" && !brakes){
    crash = true;
  }
}


/*
Instructions 

Write a function called makePurchase that takes in a parameter called priceOfItem. If the priceOfItem is less than or equal to the total on the user object, have the makePurchase function subtract the priceOfItem from the current users total. If the priceOfItem is greater than the total in the user object then have the function return "not enough funds".

Use the if and else keywords in your final solution.
The arguments passed into the makePurchase function will always be numbers.
*/

var user = {
    name: "Tiffany",
    total: 50
  }
  
  function makePurchase(priceOfItem){
    if(priceOfItem <= user.total){
      user.total -= priceOfItem;
    } else {
      return "not enough funds";
    }
}


/*
Instructions  

Write a function called decisionMaker that takes two parameters, the first one called hungry and next called tired. Have your function react according to the following scenarios.

If hungry is true and tired is false, invoke the function called eat.
If hungry is false and tired is true, invoke the function called sleep.
Otherwise have the decisionMaker function return "undecided".
Use the if and else keywords in your final solution.
The arguments passed into the decisionMaker function will always be true or false.
*/

var hunger;
var fatigue;

function eat(){
  hunger = "gone";
  return "yum yum";
}

function sleep(){
  fatigue = "gone";
  return "zzz zzz zzz";
}

function decisionMaker(hungry, tired){
  if(hungry && !tired){
    eat();
  } else if(!hungry && tired){
    sleep();
  } else {
    return "undecided";
  }
}

