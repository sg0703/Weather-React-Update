import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [city, setCity] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        // this calls prop function inherited from App, which is actually SEARCH
        onFormSubmit(city);
    }

    return(
            <div className="card">
                <h5 className="card-header bg-dark text-light">What's the weather in...</h5>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <input 
                            type="text" 
                            className="form-control my-1"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </form>
                      
                </div>
            </div>
    );
}

export default SearchBar;