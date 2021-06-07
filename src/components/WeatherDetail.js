import React from 'react';

const WeatherDetail = ({ day }) => {
    return (
        <div className="card col-md-2 p-0 m-2">
        <div className="card-header">
            <h4>{ new Date(day.dt * 1000).toLocaleString() }</h4>
            <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
            />
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                Temperature: {day.temp.day}
            </li>
            <li className="list-group-item">
                Humidity: {day.humidity}
            </li>
        </ul>
        </div>
    );
}

export default WeatherDetail;