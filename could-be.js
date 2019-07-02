let map, tileLayer;
map = L.map("could-be-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(map);
map.setView([40.730833, -73.9975], 16);

let couldBeFeatures;
$.getJSON("https://the-javascripting-english-major.org/v1/could-be.geo.json", function(data){ //define leaflet layer
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
  couldBeLayer = L.featureGroup(couldBeFeatures.map(function(feature){ //create Leaflet feature group made of markers for each object
    return L.marker(feature.latLng);
  })
);
couldBeLayer.addTo(map); //add layer to map
map.fitBounds(couldBeLayer.getBounds()); //redraw map so all markers are visible.
map.zoomOut(1); //zoom out one level to give some padding
});
