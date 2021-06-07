import axios from 'axios';
import { KEY } from './config.js'; 
// file that exports const KEY w/ OpenWeather API key

/** 
 * 
 * YOU WILL NEED TO CREATE YOUR OWN OPENWEATHER API KEY FOR THIS TO WORK
 *  
 * TWO OPTIONS: 
 * 1. STORE THE KEY BELOW OR IN A VARIABLE WITHIN THIS FILE (THEN DELETE THE IMPORT STATEMENT ON LINE 2)
 * 2. WRITE YOUR OWN CONFIG.JS FILE THAT EXPORTS A SINGLE KEY VARIABLE WITH YOUR API KEY
 * 
 * 
 * */

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: KEY,
        units: 'imperial'
    }
});