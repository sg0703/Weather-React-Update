import axios from 'axios';

// api key stored in .env file
export default axios.create({
    baseURL: 'https://api.openweathermap.org/',
    params: {
        appid: process.env.REACT_APP_API_KEY
    }
});