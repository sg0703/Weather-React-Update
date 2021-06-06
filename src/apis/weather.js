import axios from 'axios';

const KEY = '2d1455849cad8d73b4d9605338104f0f';

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: KEY 
    }
});

/** 
function showResults(city) {
    var cityLat = '';
    var cityLong = '';

    // API key for sam.j.gates@gmail.com
    var apiKey = '2d1455849cad8d73b4d9605338104f0f';

    getCoordinatesUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + apiKey;

    // use promise chain to 1. get coordinates using geo decode API, THEN 2. get all weather data needed for project from one call API 
    fetch(getCoordinatesUrl, {mode: 'cors'})
        .then(function (response) {
            // Check the console first to see the response.status
            if(response.status != 200) {
                console.log(response.status);
                $('#city_name').html("Error!");
                $('#city_content').html("Your search was unsuccessful. Please try another city.");
            }
            return response.json();
        })    
        // use coordinates to make a second API call to get all weather data
        .then(function (data) {
           cityLat = data[0].lat;
           cityLong = data[0].lon;

           forecastRequest = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + cityLat + '&lon=' + cityLong + '&exclude=minutely,hourly,alerts&units=imperial&appid=' + apiKey;
        
           return fetch(forecastRequest, {mode: 'cors'});
        })
        .then(function(response) {
            if(response.status != 200) {
                $('#city_name').html("Error!");
                $('#city_content').html("Something went wrong. Please try another city.");
            }
            return response.json();
        })
        // finally, send weather data to page
        .then(function(data) { 
            displayToday(data,city); // display current weather info to page
            displayForecast(data,city); // display forecase to page
            addPastSearch(city); // add to list of stored searches
        });
}
**/