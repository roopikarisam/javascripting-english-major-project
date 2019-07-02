let firstMap, tileLayer; //tileLayer variable for adding tile layer
firstMap = L.map("first-map"); //first map is now object to use in JS to control map. .map() is a method that L (Leaflet) has that creates a map in the <div> with the id given as the parameter. [firstmap div is in the htmls file]
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    }); //defining tileLayer, specificies server from which Leaflet should get tiles (here, cartocdn.com) and add three options (attribution is what appears in the bottom corner of the map) - this alone does not add tile layer, need to indicate what part of the world to show.
tileLayer.addTo(firstMap); //all leaflet objects have to be added to the map using the .addTo() method.
firstMap.setView([42.52261, -70.88634], 16); //lines 9 & 10 set initial map view. Map itself has a method, .setView() that has two parameters - array of coordinates adn zoom level. Highest zoom level is 19.

let derive1, derive1Marker, derive1Line1Polyline;
derive1 = L.latLng(42.52261, -70.88634);
derive1Marker = L.marker(derive1).addTo(firstMap); //note capitalization of .addTo() method and lowercase of m in marker

let derive1Line1 = [[derive1.lat, derive1.lng], //sets beginning of line at marker/beginning point
[derive1.lat - 0.00068, derive1.lng + 0.00045],
[derive1.lat - 0.00185, derive1.lng - 0.00243],
[derive1.lat + 0.00002, derive1.lng - 0.00343]]; //sets coords for polylines
derive1Line1Polyline = L.polyline(derive1Line1, {color: "#db6e35"}
).addTo(firstMap);

let derive2, derive2Marker, derive2Line1Polyline;
derive2 = L.latLng(42.52261, -70.88634);
derive2Marker = L.marker(derive2).addTo(firstMap); //note capitalization of .addTo() method and lowercase of m in marker

let derive2Line1 = [[derive2.lat, derive2.lng], //sets beginning of line at marker/beginning point
[derive2.lat + 0.00068, derive2.lng + 0.00045],
[derive2.lat + 0.00185, derive2.lng - 0.00243],
[derive2.lat - 0.00002, derive2.lng - 0.00343]]; //sets coords for polylines
derive2Line1Polyline = L.polyline(derive2Line1, {color: "#d33682"}
).addTo(firstMap);
