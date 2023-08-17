import React, { useState, useContext } from 'react';

// Context
import { WeatherContext } from '../context/WeatherContextProvider';

// Styles
import styles from "./Header.module.css"

const Header = () => {

    const [city, setCity] = useState("")

    const {data, fetchAPI} = useContext(WeatherContext);

    const buttonHandler = event => {
        event.preventDefault();
        if(!data.find(item => item.name.toLowerCase() === city.toLowerCase())) {
            fetchAPI(city)
        }
        setCity("")
        
    }

    return (
        <>
            <h1>Weather App</h1>
            <form className={styles.input}>
                <input type='text' value={city} onChange={event => setCity(event.target.value)}  placeholder="Search for a city" autoFocus />
                <button type="submit" onClick={buttonHandler}>submit</button>
            </form>
        </>
    );
};

export default Header;