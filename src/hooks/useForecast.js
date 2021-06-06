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
        console.log(res)
        // set state var
        setForecast(res.data.main.temp);
    }

    return [forecast, search];
}

export default useForecast;