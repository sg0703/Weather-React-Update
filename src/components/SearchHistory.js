import React from 'react';
import SearchHistoryDetail from './SearchHistoryDetail';

const SearchHistory = ({ history }) => {
    if(!history) {
        return null;
    }

    const cards = history.map((city, i) => {
        return (
            <SearchHistoryDetail
                city={city}
                key={`day_${i}`}
            />
        );
    });

    return(
        <div className="card mt-2">
            <h5 className="card-header bg-dark text-light">
                Past Searches
            </h5>
            <div className="card-body">
                <ul>
                    {cards}
                </ul>
            </div>
        </div>
    );
}

export default SearchHistory;