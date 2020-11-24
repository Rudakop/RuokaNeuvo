const axios =  require('axios')

const yelpAPIEndpoint = process.env.YELP_API_ENDPOINT
const yelpAPIKey = process.env.YELP_API_KEY

if (yelpAPIEndpoint == null) {
  throw new Error ('The environment YELP_API_ENDPOINT is missed!')
}

if (yelpAPIKey == null) {
  throw new Error ('The environment YELP_API_KEY is missed!')
}

const instance = axios.create({
  baseURL: yelpAPIEndpoint,
  headers: {'Authorization': `Bearer ${yelpAPIKey}`}
});

module.exports = instance