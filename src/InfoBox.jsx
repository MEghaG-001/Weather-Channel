import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';

export default function InfoBox({info}){
    const INTI_URL = "https://media.istockphoto.com/id/855022728/photo/view-of-the-plateau-soni-kougen-in-japan.jpg?s=612x612&w=0&k=20&c=uAhE4c7B52DPi2r1FmPtfrcV0wZvaQjg8f1B5AsHJXw=";
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1740560516658-5a94b0b715ed?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1594087588915-6aa3c388474f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
        <h2>Weather Report - {info.weather}</h2>

        <br></br><br></br>

        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL : info.temp<15 ? COLD_URL : info.temp >28 ? HOT_URL : INTI_URL }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {
         info.humidity > 80 ? <ThunderstormIcon /> :
         info.temp < 15 ? <AcUnitIcon /> :
         info.temp > 28 ? <SunnyIcon /> :
           <AirIcon />
        }
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature = {info.temp}&deg;C
          </div>
          <div>Humidity = {info.humidity}
          </div>
          <div> Max Temperature = {info.tempMax}&deg;C
          </div>
          <div>Min Temperature = {info.tempMin}&deg;C
          </div>
          <div>The weather can be described as <strong><i>{info.weather}</i></strong> and feels Like = {info.feels_Like}&deg;C
          </div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    
    );
}