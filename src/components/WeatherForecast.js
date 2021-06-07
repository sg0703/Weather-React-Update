import React from 'react';

const WeatherForecast = ({ forecast }) => {
    return (
        <div className="card">
        <div className="card-header">
            <h1>{ forecast.name }</h1>
            <img
                src={`https://openweathermap.org/img/wn/${forecast.icon}.png`}
                alt={forecast.icon_alt}
            />
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                Current temperature: {forecast.temp}
            </li>
            <li className="list-group-item">
                Humidity: {forecast.humidity}
            </li>
            <li className="list-group-item">
                Minimum temp: {forecast.temp_min}
            </li>
            <li className="list-group-item">
                Max temp: {forecast.temp_max}
            </li>
        </ul>
        </div>
    );
}

export default WeatherForecast;