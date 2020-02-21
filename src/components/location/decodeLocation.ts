import axios from 'axios';

const API_URL = 'http://localhost:8080/locations';

export default (lat: string, long: string) => {
  return axios.post(API_URL, { coords: { lat: lat, long:long } }).then(response => {
    return response.data.location! as string
  });
};
