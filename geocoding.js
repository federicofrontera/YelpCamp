require('dotenv').config();
const mbxGeocoding =  require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({accessToken: process.env.MAPBOX_TOKEN});

//geocoding
geocodingClient.forwardGeocode({
    query: 'Paris, France',
    limit: 2
})
    .send()
    .then(response => {
        const match = response.body;
        console.log(match.features[0].geometry);

    });