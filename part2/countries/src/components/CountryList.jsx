import { useEffect, useState } from 'react'
import weatherService from '../services/weather'
import CountryWeather from './CountryWeather'
import CountryLanguages from './CountryLanguages'

const CountryList = ({ countries = [] }) => {
    const [displayedCountry, setDisplayedCountry] = useState(null)
    const [weatherData, setWeatherData] = useState(null)

    const showCountry = (country) => {
        setDisplayedCountry(country)
    }

    useEffect(()=> {
        if (countries.length === 1){
            return setDisplayedCountry(countries[0])
        } 

        setDisplayedCountry(null)
    }, [countries]);

    useEffect(()=> {
        if (!displayedCountry) return

        weatherService
            .show(displayedCountry.name.common)
            .then(res => { 
                console.log(res)
                return setWeatherData(res)
                }
            );
    }, [displayedCountry])


    if (!countries.length){
        return (
            <p>No Countries Found</p>
        )
    }
    if (countries.length > 10 && !displayedCountry) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    if (countries.length < 10 && countries.length >= 2 && !displayedCountry) {
        return (
            <>
            {
                countries.map((country) => 
                    <div key={country.name.official}>
                    <p>{country.name.common}</p>
                    <button onClick={
                        () => showCountry(country)
                    }>Show</button>
                </div>
                )
            }
                
            </>
        )  
    }

    if (displayedCountry && 'name' in displayedCountry){
        return (
            <div>
                <h1>{displayedCountry.name.common}</h1>
                <p>{displayedCountry.capital}</p>
                <p>{displayedCountry.area}</p>

                <CountryLanguages 
                    languages={displayedCountry.languages}
                />

                <img 
                    src={displayedCountry.flags.png} 
                    alt={`${displayedCountry.name.common} flags`} 
                />

                {weatherData && <CountryWeather 
                    name={displayedCountry.name.common}
                    temperature={weatherData.main.temp}
                    icon={weatherService.getWeatherIcon(weatherData?.weather[0].icon)}
                    windSpeed={weatherData.wind.speed}
                />}
            </div>
        )  
    }

}

export default CountryList