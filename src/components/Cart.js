import React from 'react';

// Styles
import styles from "./Cart.module.css"

const Cart = ({data}) => {

    return (
        <div className={styles.cart}>
            <div>
                <span className={styles.country}>{data.name} </span>
                <span className={styles.land}>{data.sys.country}</span>
            </div>\2.14
            <h3 className={styles.temp}>{Math.round(data.main.temp)} C</h3>
            <figure className={styles.figure}>
                <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`} alt="           ." />
                 <figcaption>{data.weather[0].description}</figcaption>
            </figure>
        </div>
    );
};

export default Cart;