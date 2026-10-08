import { useState } from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b31b721e9031eab288ee30c7cc3b6e39";

    let getWeatherInfo = async() => {
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        //console.log(jsonResponse);
        let result = {
            city:city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feels_Like : jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        //console.log(result);
        return result;
        }catch(err) {
            throw err;
        }
    };
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setCity("");
        }catch(err) {
            setError(true);
        }
    }
    return(
    <div className ="SearchBox">
    <h3>Pick a City, see what the weather's serving </h3>
    <form onSubmit={handleSubmit}>

         <TextField required 
                    id="city" 
                    label="City Name" 
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
            /><br></br><br></br>
         <Button type='submit'
                 variant="contained"
                endIcon={<LocationSearchingOutlinedIcon />}
                
        >
        Search
      </Button>
      {error && <p style={{color:"red"}}>We are unable to find climate condition of <strong>{city}</strong> or No such Place exsits!</p>}
    </form>
    </div>
    );
};