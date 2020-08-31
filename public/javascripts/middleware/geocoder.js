const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({accessToken: process.env.MAPBOX_TOKEN});


module.exports = {
    forward: function (req, res, next) {
        geocodingClient.forwardGeocode({
            query: req.body.campground.location,
            countries: [req.body.campground.country],
            limit: 1
        })
            .send()
            .then(response => {
                const match = response.body;
                req.body.campground.coordinates = match.features[0].geometry.coordinates;
                next();
            })
            // eslint-disable-next-line no-unused-vars
            .catch(error => {
                req.body.campground.coordinates = [-96, 37.8];
                req.flash('error', 'Location not found, coordinates set to: ' + req.body.campground.coordinates);
                next();
            });
    }
};

