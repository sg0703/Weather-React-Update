import { useState, useEffect } from 'react';
import { getPastSearches } from '../apis/history';

const useHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        getHistory();
    }, [history]);

    const getHistory = () => {
        const pastSearches = getPastSearches();

        setHistory(pastSearches);
    }

    return [history, getHistory]
}

export default useHistory;