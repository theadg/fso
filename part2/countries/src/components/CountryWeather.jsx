import React from 'react'

const CountryWeather = ({name, temperature, icon, windSpeed}) => {
  return (
    <div>
        <h1>Weather in {name}</h1>
        <p>temperature {temperature} celsius</p> 
        <img src={icon}/>
        <p>wind {windSpeed}</p>
    </div>
  )
}

export default CountryWeather