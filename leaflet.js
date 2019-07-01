//beyond the marker
//can build polylines, polygons, circles - build array of coordinators and feed it as a parameter to the method.

let firstMap, tileLayer; //tileLayer variable for adding tile layer
firstMap = L.map("first-map"); //first map is now object to use in JS to control map. .map() is a method that L (Leaflet) has that creates a map in the <div> with the id given as the parameter. [firstmap div is in the htmls file]
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    }); //defining tileLayer, specificies server from which Leaflet should get tiles (here, cartocdn.com) and add three options (attribution is what appears in the bottom corner of the map) - this alone does not add tile layer, need to indicate what part of the world to show.
tileLayer.addTo(firstMap); //all leaflet objects have to be added to the map using the .addTo() method.
firstMap.setView([40.730833, -73.9975], 16); //lines 9 & 10 set initial map view. Map itself has a method, .setView() that has two parameters - array of coordinates adn zoom level. Highest zoom level is 19.
let washingtonSquarePark, washingtonSquareParkMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).addTo(firstMap);//adds marker for Washington Square Park//
tenThousandth = [[40.7307, -73.9976], [40.7307, -73.9974],
                 [40.7309, -73.9974], [40.7309, -73.9976]]; //constructs array of coordinates which is a box two ten thousandths of a degree wide and tall, more or less centered on the marker and add to map (see addTo in line 18)
tenThousandthPolygon = L.polygon(tenThousandth, {
                                 color: "#268bd2",
                                 fillColor: "#fdf6e3"
                               }
                        ).addTo(firstMap); //polygone method takes an options object parameter - here color is used.
thousandth = [[washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng + 0.001], //b/c washingtonSquarePark was defined as a L.latLng object in line 18, it has two properties - .lat and .lng which can be used as below (hence why defining objects rather than an array of coordinates is a better plan)
              [washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng + 0.001]]; //created polygon
thousandthPolyline = L.polyline(thousandth, {color: "#d33682"}
).addTo(firstMap); //created three line segments

let circle; //adding circle to map
circle = L.circle(washingtonSquarePark, {radius: 100, //defines circle in relation to the coordinates, radius in meters
color: "#859900",
fillColor: "#cb4b16",
opacity: 0.9, //opacity of border color, also an option for L.polygon & L.polyline
fillOpacity: 0.25} //opacity of fill color, also an option for L.polygone & L.polyline. full list of options: https://leafletjs.com/reference-1.2.0.html#path
).addTo(firstMap);
//additional notes: instead of L.marker you can use L.circleMarkers and there is an L.rectangle object (like what was built as tenThousandthPolygon above)

//firstmap
/*let firstMap, tileLayer; //tileLayer variable for adding tile layer
firstMap = L.map("first-map"); //first map is now object to use in JS to control map. .map() is a method that L (Leaflet) has that creates a map in the <div> with the id given as the parameter. [firstmap div is in the htmls file]
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    }); //defining tileLayer, specificies server from which Leaflet should get tiles (here, cartocdn.com) and add three options (attribution is what appears in the bottom corner of the map) - this alone does not add tile layer, need to indicate what part of the world to show.
tileLayer.addTo(firstMap); //all leaflet objects have to be added to the map using the .addTo() method.
firstMap.setView([40.730833, -73.9975], 16); //lines 9 & 10 set initial map view. Map itself has a method, .setView() that has two parameters - array of coordinates adn zoom level. Highest zoom level is 19.
//add marker to map
let bobstLibrary; //define variable for map marker
bobstLibrary = L.marker([40.729444, -73.997222]); //indicating coordinates for marker
bobstLibrary.addTo(firstMap); //add object to map
//bind popup to marker
bobstLibrary.bindPopup("This is Bobst Library.");
//lat and long coordinates are own objects in leaflet
let bobstCoords;
bobstCoords = L.latLng(40.729444, -73.997222); //creates objets of coords - can create latLng objects or use coordinate arrays like line 13
firstMap.panTo(bobstCoords); //.panTo() method changes the map [e.g. will move map elsewhere. Theoretically one could do an onClick panTo and make the map move on click] */
