import { useEffect, useState } from 'react';

function getLocalStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    const value = JSON.parse(saved);

    return value || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [valueMode, setValueMode] = useState(() => {
        return getLocalStorageValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(valueMode));
    }, [valueMode, key]);

    return [valueMode, setValueMode];
};
