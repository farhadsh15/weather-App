import React from 'react';

import WeatherContextProvider from './context/WeatherContextProvider';
import Header from './components/Header';
import Carts from './components/Carts';


const App = () => {
    return (
        <WeatherContextProvider>
            <Header />
            <Carts />
        </WeatherContextProvider>
    );
};

export default App;