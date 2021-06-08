import React from 'react';
import SearchHistoryDetail from './SearchHistoryDetail';

const SearchHistory = ({ history }) => {
    if(history.length === 0) {
        return <h1>No history yet!</h1>;
    }

    const cards = history.map((city, i) => {
        return (
            <SearchHistoryDetail
                city={city}
                key={i}
            />
        );

        return 
    });
}

export default SearchHistory;