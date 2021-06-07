import React from 'react';
import WeatherDetail from './WeatherDetail';

const WeatherDetailList = ({ forecast }) => {
    if(!forecast.fiveDay) {
        return null;
    }

    const cards = forecast.fiveDay.map((day) => {
        return (
            <WeatherDetail 
                day={day}
                key={day.dt}
            />
        );
    });

    return <div className="row">{cards}</div>;
}

export default WeatherDetailList;