/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Info from './info';

export default function Weather(props) {
  // This method returns undefined or a JSX component
  if (props.weatherData === null) {
    // If there is no data return undefined
    return <h2>Enter zip</h2>;
  // eslint-disable-next-line no-else-return
  } else {
    // eslint-disable-next-line no-console
    console.log(props.weatherData);
    if (props.weatherData.weather !== undefined) {
      // Take the weather data apart to more easily populate the component
      const { speed } = props.weatherData.wind;
      const { main, description, icon } = props.weatherData.weather[0];
      const {
        temp,
        pressure,
        humidity,
        tempMin,
        tempMax,
      } = props.weatherData.main;

      return (
        <div className="weather">
          <Info label="Title" data={main} />
          <Info label="Desc" data={description} />
          <Info label="Icon" data={icon} />
          <Info label="Temp" data={temp} />
          <Info label="Pressure" data={pressure} />
          <Info label="Humidity" data={humidity} />
          <Info label="Temp Min" data={tempMin} />
          <Info label="Temp Max" data={tempMax} />
          <Info label="Wind Speed" data={speed} />
        </div>
      );
    }
    return <h2>Invalid zip</h2>;
  }
}
// This method returns undefined or a JSX component
