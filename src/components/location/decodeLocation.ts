import axios from 'axios';

const API_URL = 'https://wtw-api.herokuapp.com/locations';

export default (lat: string, long: string) => {
  return axios.post(API_URL, { lat: lat, long:long }).then(response => {
    return response.data.location! as string
  });
};
