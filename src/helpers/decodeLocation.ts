import axios from 'axios';

const API_URL = 'https://wtw-api.herokuapp.com/location';

export default (lat: string, long: string): Promise<string> => {
  return axios.post(API_URL, { lat, long }).then(response => {
    return response.data as string;
  });
};
