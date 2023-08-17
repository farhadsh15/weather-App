import React, { useState, createContext } from 'react';

// API
import { getData } from '../services/api';

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
    
    const [data, setData] = useState([]);
    
    const fetchAPI = async (city) => { 
        setData([
        ...data,
        await getData(city)
        
    ]);

    }

    return (
        <WeatherContext.Provider value={{ data, fetchAPI}}>
            {props.children}
        </WeatherContext.Provider>
    );
};
export default WeatherContextProvider;