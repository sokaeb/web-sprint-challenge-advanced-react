import { useState } from 'react';

// useLocalStorage passed a key, if that doesn't exist, it will create it based on
// what is passed in as initialState
// setting the state to the key if localStor has that key already
// if it doesn't, it'll create that item and add/set it as a key in localStor
// parsing bc json is a string then stringifying initialState so json can accept
export const useLocalStorage = (key, initialState= "") => {
    const [storedValue, setStoredValue] = useState(() => {
        if(JSON.parse(window.localStorage.getItem(key))){
            return JSON.parse(window.localStorage.getItem(key));
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialState));
            return initialState;
        }
    });

    // this function takes a value, sets it as the storedValue then
    // stringifies it to be a key in localStor
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    // returning here so useForm can use it
    return [storedValue, setValue];
}