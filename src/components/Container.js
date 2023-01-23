import {useState, useEffect} from "react";
const Container = ({ weather }) => {
    const [weatherMood, setWeatherMood] = useState(null);
    useEffect(() => {
        if (weather.condition) {
            switch (weather.condition) {
                case "Mist": setWeatherMood("fa-cloud-meatball");
                    break;
                case "Sunny": setWeatherMood("fa-sun");
                    break;
                case "Clouds": setWeatherMood("fa-cloud");
                    break;
                case "Clear": setWeatherMood("fa-wind");
                    break;
                case "Rain": setWeatherMood("fa-cloud-rain");
                    break;
                case "Snow": setWeatherMood("fa-snowflake");
                    break;
                default: setWeatherMood("fa-cloud-meatball");
            }
        }
    }, [weather.condition]);
    let sunsetTime = new Date(weather.sunset * 1000).toLocaleString().split(", ")[1];
    let date = new Date().toLocaleString().split(", ");

    return (
        <div className="container">
            <div className="weather-icon">
                <i className={`fas ${weatherMood}`}></i>
            </div>
            <div className="main-info">
                <div className="main-details">
                    <div className="temperature">{weather.temperature}&deg;C</div>
                    <div className="details">
                        <div className="weather-name">{weather.condition}</div>
                        <div className="place">{weather.place}</div>
                    </div>
                </div>
                <div className="timing">
                    <div className="timing-grp">
                        <div>{date[0]}</div>
                        <div>{date[1]}</div>
                    </div>
                </div>
            </div>
            <div className="more-details">
                <div className="more-box">
                    <div>
                        <div className="sunset-icon"><i className="fas fa-adjust"></i></div>
                        <div>
                            <div>Sunset</div>
                            <div>{sunsetTime}</div>
                        </div>
                    </div>
                    <div>
                        <div className="humid-icon"><i className="fas fa-tint"></i></div>
                        <div>
                            <div>Humidity</div>
                            <div>{weather.humidity}</div>
                        </div>
                    </div>
                    <div>
                        <div className="pressure"><i className="fas fa-temperature-high"></i></div>
                        <div>
                            <div>Pressure</div>
                            <div>{weather.pressure}MM</div>
                        </div>
                    </div>
                    <div>
                        <div className="wind"><i className="fas fa-wind"></i></div>
                        <div>
                            <div>Wind</div>
                            <div>{weather.wind}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Container;