import React from 'react';
import WeatherForecast from './WeatherForecast';

const WeatherForecastList = ({ forecast }) => {
    console.log(forecast)

    return(
        <WeatherForecast temp={forecast}/>
    );
}

export default WeatherForecastList;