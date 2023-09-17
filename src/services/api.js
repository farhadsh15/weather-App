import axios from "axios";

const api_KEY = "891faf55f20c83c0f8bfcc5a5d0d24c5";

const getData = async (city) => {
    const api_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_KEY}&units=metric`;
    const response = city && await axios.get(api_URL);
    
    return response && response.data;
}

export { getData };