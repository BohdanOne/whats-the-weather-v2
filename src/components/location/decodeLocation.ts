import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;
const BASE_URL = 'https://api.opencagedata.com/geocode/v1/';

type GeocodeResponse = { results: {components: {town?: string; city?: string}}[]}

export default (lat: string, long: string) => {
  const query = encodeURI(`${lat},${long}`);
  return axios.get(`${BASE_URL}/json?q=${query}&key=${API_KEY}`)
    .then(response => response.data)
    .then((data: GeocodeResponse) => {
      if (data.results[0].components.town) {
        return data.results[0].components.town;
      } else {
        return data.results[0].components.city;
      }
    })
    .catch(e => console.log(e));
};
