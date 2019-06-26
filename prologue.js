// 1. Set the content of #glosses
$("#glosses").html("<p>The glosses will go here.</p>");
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
}); //this is going to be helpful to try and get stuff to show up in a sidebar on the data viz
