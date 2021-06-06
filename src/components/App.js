import React from 'react';
import SearchBar from './SearchBar.js';
import WeatherForecastList from './WeatherForecastList';

const App = () => {
    return(
        <div className="row p-5">
            <div className="col-md-3">
                <SearchBar />
            </div>
            <div className="col-md-9 m-0 p-0">
                <WeatherForecastList />
            </div>
        </div>
    );
}

export default App;