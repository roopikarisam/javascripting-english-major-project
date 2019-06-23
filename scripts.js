
//function that always returns the last item in whatever array you pass it.

let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3, 4];
arrayMixed = ["a" , 1, null, true, arrayOfNumbers, [4.5, 5.6]];

function lastItem(x) {x.slice(-1);   // right now this returns second to last item of array
$("#response").html(x.slice(-1));
}
lastItem(arrayMixed);
//i think i need to pass the arrays into an object and then write pop function?


//pop method for returning last item in array that works
/*let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3, 4];
arrayMixed = ["a" , 1, null, true, arrayOfNumbers, [4.5, 5.6]];

$("#response").html(arrayOfNumbers.pop()); */
//objects

//using functions as properties (when functions are used as properties, they are called methods)
/* let myHabaneroSauceSquirts, myBurritoObject;
myHabaneroSauceSquirts = 3; //assigns variable
myBurritoObject = {
 tortilla: "wheat",
 guacamole: true,
 beans: "pinto",
 habaneroSauceSquirts: myHabaneroSauceSquirts, //defines property using variable assigned above
 spiciness: function(){ //defines a property using the variable in a function - this is an anonymous function [function()]- it's ephemeral for the purpose of getting called, executed and disappearing. Because it was not declared & named elsewhere, it's not accessible elsewhere.
   if (myHabaneroSauceSquirts > 0) {
     alert("This is a spicy burrito");
   } else {
     alert("This is a mild burrito");
   }
 }
};
$("#response").html("Your burrito has " + myBurritoObject.habaneroSauceSquirts   + " squirts of habanero.");
myBurritoObject.spiciness(); //calls the function */

 /* let myBurritoObject; //defining an object
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: 3
};
$("#response").html(myBurritoObject.beans); //accessing property of object */

//arrays
/* let arrayOfStrings, arrayOfNumbers, arrayOfMixed;
arrayOfStrings = ["a" , "b" , "c"];
arrayOfNumbers = [1 , 2 , 3];
arrayOfMixed = ["a" , 1 , null , true , arrayOfNumbers , [4.5 , 5.6]]; //defining arrays
$("#response").html(arrayOfStrings.length); //accessing length property of array */

/* let arrayOfStrings, arrayOfNumbers, arrayOfMixed;
arrayOfStrings = ["a" , "b" , "c"];
arrayOfNumbers = [1 , 2 , 3];
arrayOfMixed = ["a" , 1 , null , true , arrayOfNumbers , [4.5 , 5.6]]; // defining arrays
$("#response").html(arrayOfStrings[0]); //accessing item in array  */

//TIPPING CALCULATOR FUNCTION THAT DISTINGUISHES BETWEEN 20% and 0.02 as parameters
//let tipCalculator;
//tipCalculator = function (total, tipRate) {
//  let tipAmount = tipRate * total;
//  if (tipRate >= 1) {
//$("#response").append("Your tip is $" + (tipAmount * 0.01));
//} else {$("#response").append("Your tip is $" + tipAmount);}
//}; //this just writes the function

//tipCalculator(50.00, 0.20); //this passes the parameters to the function to execute it

//TIPPING CALCULATOR FUNCTION
//let tipCalculator;
//tipCalculator = function (total, tipRate) {
//  let tipAmount = tipRate * total;
//$("#response").append("Your tip is $" + tipAmount);
//}; //this just writes the function

//tipCalculator(50.00, 0.2); //this passes the parameters to the function to execute it


//TIPPING CALCULATOR Ch. 2
//let tipRate, bill, billPlusTip;
//tipRate = 0.20;
//bill = 10.00;
//billPlusTip = (bill * tipRate) + bill;
//console.log(billPlusTip);

//COUNT UP TO USER INPUT
//let i = prompt("givemeanumber");
//let x = 0;
//let y = i % 2;

// this code also works and removes unnecessary line
//for (x  ; x <= i; x++) { // initializes var x, sets testing condition of when x is greater than or equal to i so the loop runs when x is less than i and stops when x = i, indicates that each time var x is run through the loop it increases by 1
  //if (x % 2 === 0) { // the loop iterates over x so we want to test x for its modulus - remainder (in this case when divided by 2) - if the modulus === 0 it's an even number) [my error before was using i]
//  $("#response").append("<br />" + x + " is even"); //prints even if condition (x % 2 === 0) is met
//  }
//  else {  // if first condition isn't met, prints odd
//  $("#response").append("<br />" + x + " is odd");
//}
//}


// THIS CODE ACTUALLY WORKS
//for (x  ; x <= i; x++) {
//  if (x === 0) {
//    $("#response").append("<br />" + (x) + " is even");
//  }
//  else if (x % 2 === 0) {
//  $("#response").append("<br />" + (x) + " is even");
//  }
//  else {
//  $("#response").append("<br />" + (x) + " is odd");
//}
//}

////this code runs backward from 4 to 0 - closest yet!
//for (i ; (x + 1) <= i; --i === i){
//  if (i % 2 === 0) {
//  $("#response").append("<br />" + (i) + " is even");
//} else if ( i % 2 !== 0) {
  //$("#response").append("<br />" + (i) + " is odd");
//}
//}

// all this code is junk
//for (y, y === 0, ) {
  //$("#response").append("<br>" + (i + 1) + " is even");
  //i = i + 1;

//switch (y) {
//  case (y === 0):
//  $("#response").append("<br>" + (x + 1) + " is even");
//  break;
//  case (y !== 0):
// $("#response").append("<br>" + (x + 1) + " is odd");
//  break;}

//for (y === 0 ; x < i;){
//    $("#response").append("<br>" + (x + 1) + " is even");
//    x = x + 1;}
//for (y !== 0 ; x < i;){
//    $("#response").append("<br>" + (x + 1) + " is odd");
//    x = x + 1;}

//for (x === 0; i > x; x = i + 1) {
//  $("#response").append("<br>" + i + " is even");
//}

// for (let y = i % 2; y !== 0; i < i + 1) {
//    $("#response").append("<br>" + i + " is odd");


//  i = i + 1;
//} else {
//  $("#response").append("<br>" + i + " is odd");
//}
