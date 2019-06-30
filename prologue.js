// adding links to wikipedia from JSON data to gloss
// 1. Set the content of #glosses
$("#glosses").html("<p>The glosses will go here.</p>");
// 2. Set the content of the Prologue
$.getJSON("https://the-javascripting-english-major.org/v1/prologue.json", function (data){ //b/c this is data we can later use data attributes https://www.w3schools.com/tags/att_global_data.asp
  let prologueText; //define the variable needed
  prologueText = "<blockquote><p>"; // open the tags
  //now iterate over the data variable's .lines property:
  data.lines.forEach(function(line){ //returns a variable, lines
  //define blank lineText.
  let lineText;
  lineText = "";
// now iterate over each line. should be familiar
  line.forEach(function(word){
    let wordString;
    wordString = word.text;
    //console.log("<a href=" + word.url + ">" + word.url + "</a>"); //used console log to figure out how to make the active URL work and then put it into the if (word.url)
    if (word.modern){
      if (word.url){ wordString = "<a href='#' data-modern='" +   word.modern + ". Learn more at: " + "<a href=" + word.url + ">" + word.url + "</a>"  + "'>" + wordString + "</a>"; //condition where there is both a modern and a url
    } else { wordString = "<a href='#' data-modern='" + word.modern + "'>" + wordString + "</a>";}
  }
    lineText = lineText + wordString + " ";
  });
// Add lineText with a line break to the prologueText.
prologueText = prologueText + lineText + "<br/>";
});
//close the prologueText tags.
prologueText = prologueText + "</p></blockquote>";
$("#prologue").html(prologueText);

$("#prologue a").click(function(){
 let glossText, clickedWord, modernWord;
 clickedWord = $(this).text(); //when called w/o parameters, .text() method gets text; when called w/ parameters it sets the text to the parameter.
 modernWord = $(this).data("modern"); //gets data for modern
 glossText = "<h2>You clicked " + clickedWord + ", which means " + modernWord + ". </h2>";
 $("#glosses").html(glossText); //the clicking had to be within the function b/c async
});
});

//clicky code using JSON data
// 1. Set the content of #glosses
/*$("#glosses").html("<p>The glosses will go here.</p>");
// 2. Set the content of the Prologue
$.getJSON("https://the-javascripting-english-major.org/v1/prologue.json", function (data){
  let prologueText; //define the variable needed
  prologueText = "<blockquote><p>"; // open the tags
  //now iterate over the data variable's .lines property:
  data.lines.forEach(function(line){ //returns a variable, lines
  //define blank lineText.
  let lineText;
  lineText = "";
// now iterate over each line. should be familiar
  line.forEach(function(word){
    let wordString;
    wordString = word.text;
    if (word.modern){
      wordString = "<a href='#' data-modern='" + word.modern + "'>" +wordString + "</a>";
    }
    lineText = lineText + wordString + " ";
  });
// Add lineText with a line break to the prologueText.
prologueText = prologueText + lineText + "<br/>";
});
//close the prologueText tags.
prologueText = prologueText + "</p></blockquote>";
$("#prologue").html(prologueText);

$("#prologue a").click(function(){
 let glossText, clickedWord, modernWord;
 clickedWord = $(this).text(); //when called w/o parameters, .text() method gets text; when called w/ parameters it sets the text to the parameter.
 modernWord = $(this).data("modern"); //gets data for modern
 glossText = "<h2>You clicked " + clickedWord + ", which means " + modernWord + "</h2>";
 $("#glosses").html(glossText); //the clicking had to be within the function b/c async
});
});*/


//replace the content of #prologue.
//close callback function & method
//3. Wait for user to click on an <a> tag inside #prologue and then change the content of #glosses.
 //this is going to be helpful to try and get stuff to show up in a sidebar on the data viz

//working clicky code
// 1. Set the content of #glosses
/* $("#glosses").html("<p>The glosses will go here.</p>");
// 2. Set the content of #prologue
let line1, line1Text; // don’t need the intermediate step of line1TextArray
line1 = [{text: "Whan", modern: "When"}, {text: "that"}, {text: "Aprill," , modern: "April,"}, {text: "with"},
        {text: "his"}, {text: "shoures" , modern: "showers"}, {text: "soote", modern: "sweet"}];
line1Text = "<blockquote><p>";
line1.forEach(function(word){
  let wordString;
  wordString = word.text;
  if (word.modern) {
    wordString = "<a href='#' data-modern='" +  word.modern + "'>" + wordString + "</a>"; //creates data for modern
  }
  line1Text = line1Text + wordString + " ";
});
//line1Text = line1Text + "<br />(line 2 would go here)</p></blockquote>";
$("#prologue").html(line1Text);
// <br /> makes a line break, which will come in handy when we have many
// lines.
//3. Wait for user to click on an <a> tag inside #prologue and then change the content of #glosses.
$("#prologue a").click(function(){
  let glossText, clickedWord, modernWord;
  clickedWord = $(this).text(); //when called w/o parameters, .text() method gets text; when called w/ parameters it sets the text to the parameter.
  modernWord = $(this).data("modern"); //gets data for modern
  glossText = "<h2>You clicked " + clickedWord + ", which means " + modernWord + "</h2>";
  $("#glosses").html(glossText);
}); //this is going to be helpful to try and get stuff to show up in a sidebar on the data viz */
