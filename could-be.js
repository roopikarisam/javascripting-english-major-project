let map, tileLayer;
map = L.map("could-be-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(map);
map.setView([40.730833, -73.9975], 16);
//can turn csv into GeoJSON with converter http://www.convertcsv.com/csv-to-geojson.htm
let couldBeFeatures; //this is not defined w/in callback function so it is globally available for later
$.getJSON("https://the-javascripting-english-major.org/v1/could-be.geo.json", function(data){ //define leaflet layer - getJSON is async so everything is happening inside the callback function defined in line 11
  let couldBeLayer; //define Leaflet layer.
  couldBeFeatures = data.features.map(function(feature){ //iterate over the .features property of the GeoJSON object to create an array of objects (called features), with every object's properties as noted.
    return { //returns and object
      name: feature.properties.name,
      html: feature.properties.html,
      tab: feature.properties.tab,
      mentions: feature.properties.mentions,
      lines: feature.properties.lines,
      wikipedia: feature.properties.wikipedia,
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]) //create an L.latLng object out of the GeoJSON coordinates - remember its long/lat not lat/long in GeoJSON
    };
  });
  couldBeLayer = L.featureGroup(couldBeFeatures.map(function(feature){ //create Leaflet feature group made of markers for each object (made up of several markers)
    return L.marker(feature.latLng);
  })
);
couldBeLayer.addTo(map); //add layer to map
map.fitBounds(couldBeLayer.getBounds()); //redraw map so all markers are visible. REturns bounding box that contains entity of the layer (couldBeLayer). It is fed as parameter to .fitBounds() which changes map's object state to new zoom level and helps center coordinate.
map.zoomOut(1); //zoom out one level to give some padding. the map object's .zoomOut() method zooms out a smidge (1) to make all markers appear.
});

//Define and assign a Markdown-it renderer.
/*let md;
md =window.markdownit({html: true}).use(window.markdownitFootnote);
//Load the Markdown file with jQuery.
$.ajax({url: "https://the-javascripting-english-major.org/v1/examples/markdown/hastings-street.md", //ajax method is more generic version of $.getJSON() - takes object as parameter with a .url property and a .success property which runs if the ajax() method runs smoothly. .url property must point to markdown file on a server (http or https)
success: function(markdown){
  //Convert Markdown to HTML.
let html;
html = md.render(markdown);
  //print the HTML to #content using jquery.
$("#content").html(html);
}
}); */

let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
["hastings-street", "eighteenth-and-vine",
  "fifth-and-mound", "introduction",
  "lenox-avenue", "rampart"].forEach(function(tab){
  // Create a variable tab that has the name as a string.
  $.ajax({
    // tab + ".md" yields, for example, "rampart.md".
    url: "https://the-javascripting-english-major.org/v1/examples/markdown/" + tab + ".md",
    success: function(markdown){
      let html;
      html = md.render(markdown);
      // "#rampart", for example.
      $("#" + tab).html(html);
    }
  });
});

/*$.ajax({
  url: "https://the-javascripting-english-major.org/v1/examples/markdown/poem.md",
  success: function(poem){
    let html;
    html = md.render(poem);
    $("#poem").html(html); //select poem, html() method to get the html, get string
    // The above is the same as the $.ajax() call in the prev. ch.
    $("#poem").html(function(_, oldHtml){ //anonymous function in html() method inherits two variables
      let newHtml; //defines newHTML variable ans assign it to result of oldHTML
      newHtml = oldHtml.replace(/Hastings Street/g, "<a href='#'  data-place='hastings-street'>Hastings Street</a>"); //does the replacement using /Hastings Street/g as regular expression, <a href...> is replacement spring (and new data tab is added)
      return newHtml; //returns result of newHTML
    });
  }
});*/

//load Poemlet
let loadPoem, loadNavTabs;
loadPoem = function(featuresArray){
  $.ajax({
    url: "https://the-javascripting-english-major.org/v1/examples/markdown/poem.md",
    success: function(markdown){
      let html;
      html = md.render(markdown);
      $("#poem").html(html);
    }
  }
);
};

//adding links to poem
$.ajax({
  url: "https://the-javascripting-english-major.org/v1/examples/markdown/poem.md",
  success: function(poem){
    // Read in the poem.
    let html;
    // Use the Markdown-it renderer I defined last chapter.
    html = md.render(poem);
    $("#poem").html(html);
    // Once the poem is in, start the loop.
    couldBeFeatures.forEach(function(feature){
      $("#poem").html(function(_, oldHtml){
        let regex, newHtml;
        // Assign the the regex the value of feature.html and the
        // flag “g”. This is the equivalent to /Hastings Street/g.
        regex = RegExp(feature.html, "g");
        // Fill in newHtml with the properties from the couldBeFeatures.
        newHtml = "<a href='#' data-tab='" + feature.tab + "'>" + feature.html + "</a>";
        // Return the newHtml wherever `replace()` finds the value
        // of regex.
        return oldHtml.replace(regex, newHtml);
      });
          });
        }
      });
