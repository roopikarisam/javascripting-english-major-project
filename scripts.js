

//TIPPING CALCULATOR FUNCTION
let tipCalculator;
tipCalculator = function (total, tipRate) {
  let tipAmount = tipRate * total;
$("#response").append("Your tip is $" + tipAmount);
}; //this just writes the function

tipCalculator(50.00, 0.2); //this passes the parameters to the function to execute it

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
