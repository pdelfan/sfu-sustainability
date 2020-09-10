var mymap = L.map('map').setView([49.278094, -122.919883], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(mymap);

var marker = L.marker([49.278094, -122.919883]).addTo(mymap);
marker.bindPopup("<h3>SFU Burnaby Campus</h3>").openPopup();
