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
