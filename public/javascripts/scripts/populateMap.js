const coordinates = document.querySelector('#map').textContent.split(',');
const name = document.querySelector('#campground-name').textContent;


//public key
mapboxgl.accessToken = 'pk.eyJ1Ijoib2tvbmRvciIsImEiOiJja2RnMmhrYmcyZHc4MnFwbTI5OXljdzBsIn0.FvyZoJXrxisObGhcQYpg6A';


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center:  coordinates,
    zoom: 10
});

// add markers to map

// create a HTML element for each feature
const el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
    .setLngLat(coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + name + '</h3><p>' + coordinates + '</p>'))
    .addTo(map);

