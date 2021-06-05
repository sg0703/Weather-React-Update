import React from 'react';
import SearchBar from './SearchBar.js';

const App = () => {
    return(
        <div className="row p-5">
            <div className="col-md-3">
                <SearchBar />
            </div>
            <div className="col-md-9 m-0 p-0">
                <h1>This is where the weather results go</h1>
            </div>
        </div>
    );
}

export default App;