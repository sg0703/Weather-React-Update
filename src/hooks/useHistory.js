import { useState } from 'react';
import { getPastSearches } from '../apis/history';

const useHistory = () => {
    const [history, setHistory] = useState([]);

    const getHistory = () => {
        const pastSearches = getPastSearches();
        console.log(pastSearches)
        setHistory(pastSearches);
    }

    return [history, getHistory]
}

export default useHistory;