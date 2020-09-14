// var mymap = L.map('map').setView([49.278094, -122.919883], 13);

// L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
//   subdomains: 'abcd',
//   maxZoom: 19
// }).addTo(mymap);

// var marker = L.marker([49.278094, -122.919883]).addTo(mymap);
// marker.bindPopup("<h3>SFU Burnaby Campus</h3>").openPopup();


window.addEventListener('load', () => {
  var map = L.map("map", {
    // one finger scrolls page, two fingers control panning and zooming of the map
    dragging: !L.Browser.mobile,
    tap: !L.Browser.mobile
  }).setView([49.278094, -122.919883], 11);

  var layer = Tangram.leafletLayer({
    scene: {
      import: 'https://cdn.protomaps.com/styles/0.0.3/grayscale.yml',
      global: { api_key: 'c8b6e5b51cc22dbd' },
    },
  }).addTo(map)
  var marker = L.marker([49.278094, -122.919883]).addTo(map);
  marker.bindPopup("<h3>SFU Burnaby Campus</h3>").openPopup();
})


