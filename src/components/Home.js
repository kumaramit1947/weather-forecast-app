import {useEffect, useState} from "react";
import Container from "./Container";
const Home=()=>{
    const [searchValue, setSearchValue] = useState("varanasi");
    const [weather,setWeather] = useState(null);
    useEffect(()=>{
        getWeatherInfo();
    },[]);
    const getWeatherInfo=()=>{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_SECRET_KEY}`;
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            let temperature = data.main.temp;
            let condition = data.weather[0].main;
            let place = data.name+", "+data.sys.country;
            let humidity = data.main.humidity;
            let pressure = data.main.pressure;
            let sunset = data.sys.sunset;
            let wind = data.wind.speed;
            setWeather({
                temperature,
                condition,
                place,
                humidity,
                pressure,
                sunset,
                wind
            });
        })
    }
    
    
    return(
        <div id="home">
            <h1 id="weather-head">Weather Forecast</h1>
            <div className="user-input">
                <input type="search" 
                placeholder="search a city..."
                className="input-box" 
                value={searchValue}
                onChange={(e)=>{setSearchValue(e.target.value)}}/>
                <button className="search-btn" onClick={getWeatherInfo}>Search</button>
            </div>
            {weather && <Container weather={weather}/>}

        </div>
    );
}
export default Home;