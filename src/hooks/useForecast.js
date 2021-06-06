import { useState, useEffect } from 'react';
import weather from '../apis/weather';

const useForecast = (defaultCity) => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        search(defaultCity);
    }, [defaultCity]);

    const search = async (city) => {
        // send API request
        const res = await weather.get('/search', {
            params: {
                q: city
            }
        });

        // set state var
        setForecast();
    }
}

export default useForecast;