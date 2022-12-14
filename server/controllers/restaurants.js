require('dotenv').config();
const axios = require('axios');

const findRestaurant = (req, res) => {
  const config = {
    params: { term: req.query.term, location: req.query.location, open_now: req.query.open_now },
    headers: { Authorization: `Bearer ${process.env.API_KEY}` },
  };

  axios
    .get('https://api.yelp.com/v3/businesses/search', config)
    .then((response) => {
      res.send(response.data.businesses);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.findRestaurant = findRestaurant;
