import React, { useContext } from 'react';

// Components
import Cart from './Cart';

// Context
import { WeatherContext } from '../context/WeatherContextProvider';

// Styles
import styles from "./Carts.module.css"

const Carts = () => {

    const {data} = useContext(WeatherContext)

    return (
        <div className={styles.carts}>
            {
                data?.reverse().map(city => <Cart key={city.id} data={city} />)
            }
        </div>
    );
};

export default Carts;