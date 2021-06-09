import React from 'react';

const WeatherDetail = ({ day }) => {
    const formatDate = (timestamp) => {
        var date = new Date(timestamp * 1000);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();

        // format time string
        var time = `${month}/${day}/${year}`;
    
        return time;
    }


    return (
        <div className="card col-md-2 p-0 m-2">
        <div className="card-header d-flex align-items-center bg-secondary">
            <h5>{ formatDate(day.dt) }</h5>
            <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
            />
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                Temperature: {day.temp.day.toFixed(1)}&deg;F
            </li>
            <li className="list-group-item">
                Humidity: {day.humidity}%
            </li>
        </ul>
        </div>
    );
}

export default WeatherDetail;