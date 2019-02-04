import React from 'react';

export default function Weather(props) {
  // This method returns undefined or a JSX component
  if (props.weatherData === null) {
    // If there is no data return undefined
    return <h2>Enter zip</h2>;
  } else {
    /* 
    This next step needs another level of error checking. It's 
    possible to get a JSON response for an invalid zip in which 
    case the step below fails. 
    */

    console.log(props.weatherData);
    if (props.weatherData.weather !== undefined) {
      // Take the weather data apart to more easily populate the component
      const { speed, deg } = props.weatherData.wind;
      const { main, description, icon, } = props.weatherData.weather[0];
      const {
        temp,
        pressure,
        humidity,
        temp_min,
        temp_max,
        clouds,
      } = props.weatherData.main;

      return (
        <div className="weather">
          <div>Title: {main}</div>
          <div>Desc: {description}</div>
          <div>Icon: {icon}</div>
          <div>Temp: {temp}</div>
          <div>Pressure: {pressure}</div>
          <div>Humidity: {humidity}</div>
          <div>Temp Min: {temp_min}</div>
          <div>Temp Max: {temp_max}</div>
          <div>Wind Speed: {speed}</div>
        </div>
      );
    } else {
        return <h2>Invalid zip</h2>;
    }
  }
}
    // This method returns undefined or a JSX component

  