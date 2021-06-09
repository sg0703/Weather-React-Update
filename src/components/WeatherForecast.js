import React from 'react';

const WeatherForecast = ({ forecast }) => {
    return (
        <div className="card">
        <div className="card-header d-flex align-items-center bg-secondary text-light">
            <h1>{ forecast.name }</h1>
            <img
                src={`https://openweathermap.org/img/wn/${forecast.icon}.png`}
                alt={forecast.icon_alt}
            />
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                Current temperature: {forecast.temp.toFixed(1)}&deg;F
            </li>
            <li className="list-group-item">
                Humidity: {forecast.humidity}%
            </li>
        </ul>
        </div>
    );
}

export default WeatherForecast;