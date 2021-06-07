import axios from 'axios';
import { KEY } from './config.js'; 
// file that exports const KEY w/ OpenWeather API key

require('dotenv').config({ path: __dirname + '/../.env'});

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: KEY,
        units: 'imperial'
    }
});