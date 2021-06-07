import React from 'react';
import WeatherDetail from './WeatherDetail';

const WeatherDetailList = ({ forecast }) => {
    // this broke the entire app until i figured it out lol
    if(!forecast.fiveDay) {
        return null;
    }

    console.log(forecast.fiveDay);

    const cards = forecast.fiveDay.splice(1,forecast.fiveDay.length-1).map((day) => {
        return (
            <WeatherDetail 
                day={day}
                key={day.dt}
            />
        );
    });

    return(
        <div className="card my-2">
            <h5 className="card-header bg-secondary text-light">7 day forecast</h5>
            <div className="card-body">
                <div className="container">
                    <div className="row justify-content-center">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDetailList;