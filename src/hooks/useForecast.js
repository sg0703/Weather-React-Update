import { useState, useEffect } from 'react';
import weather from '../apis/weather';
import { addPastSearch } from '../apis/history';

const useForecast = (defaultCity) => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        search(defaultCity);
    }, [defaultCity]);

    const search = async (city) => {
        // get city coordinates
        const coordsRaw = await weather.get('/geo/1.0/direct', {
            params: {
                q: city,
                limit: 1
            }
        });

        console.log(coordsRaw)

        const coords = {
            lat: coordsRaw.data[0].lat,
            long: coordsRaw.data[0].lon
        };

        const res = await weather.get('/data/2.5/onecall', {
            params: {
                lat: coords.lat,
                lon: coords.long,
                exclude: 'minutely,hourly,alerts',
                units: 'imperial'
            }
        });

        // destructure response and send new object to react
        let newForecast = {
            name: city,
            temp: res.data.current.temp,
            humidity: res.data.current.humidity,
            icon: res.data.current.weather[0].icon,
            icon_alt: res.data.current.weather[0].description,
            fiveDay: res.data.daily
        };

        // add search to localstorage
        addPastSearch(city);
        // send forecast data to components
        setForecast(newForecast);
    }

    return [forecast, search];
}

export default useForecast;