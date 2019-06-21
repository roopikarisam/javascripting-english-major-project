let userInput;
userInput = prompt("what do you want for dinner");
if(userInput === "burrito"){
  $("#response").html("Brilliant Choice");
}  else {
    $("#response").html("Don't you want a burrito");
}
