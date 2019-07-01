let firstMap, tileLayer; //tileLayer variable for adding tile layer
firstMap = L.map("first-map"); //first map is now object to use in JS to control map. .map() is a method that L (Leaflet) has that creates a map in the <div> with the id given as the parameter. [firstmap div is in the htmls file]
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    }); //defining tileLayer - this alone does not add tile layer, need to indicate what part of the world to show.
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16); //lines 9 & 10 set initial map view
