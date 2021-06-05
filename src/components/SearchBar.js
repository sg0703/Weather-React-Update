import React from 'react';

const SearchBar = () => {
    return(
        <div className="col-md-3">
            <div className="card">
                <h5 className="card-header bg-dark text-light">What's the weather in...</h5>
                <div className="card-body">
                    <form>
                        <input 
                            type="text" 
                            className="form-control my-1"
                            value="City name"
                        />
                        <button 
                            type="button" 
                            className="btn btn-primary my-2" id="search_btn"
                        >
                        Search
                        </button> 
                    </form>
                      
                </div>
            </div>
        </div>
    );
}

export default SearchBar;