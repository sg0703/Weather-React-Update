import React from 'react';
import SearchBar from './SearchBar.js';
import WeatherForecast from './WeatherForecast';
import WeatherDetailList from './WeatherDetailList';
import SearchHistory from './SearchHistory';
import useForecast from '../hooks/useForecast';

const App = () => {
    const [forecast,search] = useForecast('Raleigh');

    return(
        <div className="row p-5 mb-5">
            <div className="col-md-3">
                <SearchBar 
                    onFormSubmit={search} 
                />
                <SearchHistory history={forecast.history} />
            </div>
            <div className="col-md-9 m-0 p-0">
                <WeatherForecast forecast={forecast} />
                <WeatherDetailList forecast={forecast} />
            </div>
        </div>
    );
}

export default App;