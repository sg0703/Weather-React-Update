import { useState, useEffect } from 'react';
import weather from '../apis/weather';

const useForecast = (defaultCity) => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        search(defaultCity);
    }, [defaultCity]);

    const search = async (city) => {
        // send API request
        const res = await weather.get('/weather', {
            params: {
                q: city
            }
        });

        // destructure response and send new object to react
        let newForecast = {
            name: res.data.name,
            temp: res.data.main.temp,
            temp_min: res.data.main.temp_min,
            temp_max: res.data.main.temp_max, 
            humidity: res.data.main.humidity,
            icon: res.data.weather[0].icon,
            icon_alt: res.data.weather[0].description
        };

        setForecast(newForecast);
    }

    return [forecast, search];
}

export default useForecast;