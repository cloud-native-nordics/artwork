// Pasted from: https://snazzymaps.com/style/95/roadie
var roadie = [
  {
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'landscape',
    stylers: [
      {
        color: '#ffffff'
      },
      {
        visibility: 'on'
      }
    ]
  },
  {}
];

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', initMap);

opts = [];
for (name in places) {
  opts.push(name);
}

var place = places[_location];

var map = null;
var mapElement = null;

function initMap() {
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 16,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(place.lat, place.lng),
    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: roadie
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  mapElement = document.getElementById('map');
  // Create the Google Map using our element and options defined above
  map = new google.maps.Map(mapElement, mapOptions);
}

/* This is how to use the Google Maps Static API, but it gives you lower resolution:

var url = 'https://maps.googleapis.com/maps/api/staticmap'
url += '?key=API_KEY'
url += '&center=' + place.lat + ',' + place.lng
url += '&size=640x360&scale=2&zoom=14&maptype=roadmap'
url += '&style=' + encodeURI('feature:administrative|visibility:off')
url += '&style=' + encodeURI('feature:poi|visibility:off')
url += '&style=' + encodeURI('feature:transit|visibility:off')
url += '&style=' + encodeURI('feature:water|visibility:off')
url += '&style=' + encodeURI('feature:road|element:labels|visibility:off')
url += '&style=' + encodeURI('feature:road|element:geometry|color:0x000000|visibility:on')
url += '&style=' + encodeURI('feature:landscape|element:geometry|color:0xffffff|visibility:on')

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("static").setAttribute("src", url)
}, false);
*/
