import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Jabalpur",
        feels_Like: 25.22,
        humidity: 65,
        temp: 24.97,
        tempMax: 24.97,
        tempMin: 24.97,
        weather: "clear sky"
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
  return (
    <>
    <h1 style={{ textAlign: "center", color: "blueviolet"}}>The Weather Channel</h1>
    <SearchBox  updateInfo = { updateInfo } />
    <InfoBox info = {weatherInfo}/>
    </>
  )
}