const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({accessToken: process.env.MAPBOX_TOKEN});


module.exports = {
    forward: function (req, res, next) {
        geocodingClient.forwardGeocode({
            query: req.body.campground.name,
            countries: [req.body.country],
            limit: 1
        })
            .send()
            .then(response => {
                const match = response.body;
                req.body.coordinates = match.features[0].geometry.coordinates;
                next();
            })
            .catch(error => {
                req.body.coordinates = [-96, 37.8];
                console.log("Location not found, coordinates set to: " + req.body.coordinates);
            });;
    }
}

