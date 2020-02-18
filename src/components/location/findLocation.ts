const API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;
const API_URL = 'https://api.opencagedata.com/geocode/v1/';

type geocodeResponse = { results: { formatted: string }[] };

export default (lat: string, long: string) => {
  const query = encodeURI(`${lat},${long}`);
  return fetch(`${API_URL}/json?q=${query}&key=${API_KEY}`)
    .then(response => response.json())
    .then((payload: geocodeResponse) => payload.results[0].formatted)
    .catch(e => console.log(e));
};
