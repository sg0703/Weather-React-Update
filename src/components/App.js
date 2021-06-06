import React from 'react';
import SearchBar from './SearchBar.js';
import WeatherForecastList from './WeatherForecastList';
import useForecast from '../hooks/useForecast';

const App = () => {
    const [forecast,search] = useForecast('Raleigh');

    return(
        <div className="row p-5">
            <div className="col-md-3">
                <SearchBar onFormSubmit={search} />
            </div>
            <div className="col-md-9 m-0 p-0">
                <WeatherForecastList forecast={forecast}/>
            </div>
        </div>
    );
}

export default App;