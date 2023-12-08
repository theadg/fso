import { useEffect, useState } from 'react'
import countriesService from './services/countries'
import CountryList from './components/CountryList'

function App() {
  const [countryQuery, setCountryQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const handleChange = (e) => {
    setCountryQuery(e.target.value);
  }

  useEffect(()=> {
    countriesService
      .index()
      .then(res =>
        setCountries(res)
      );
  }, []);

  useEffect(() => {
    if (!countryQuery) return

    setFilteredCountries(
      countries.filter(country => 
        country.name.common
        .toLowerCase()
        .includes(countryQuery.toLowerCase()))
    )
    
  }, [countryQuery, countries])

  return (
    <>
      <div>
        <input 
          type='text' 
          value={countryQuery}
          onChange={handleChange}
        >
        </input>

        <CountryList 
          countries={filteredCountries}
        />

      </div>
    </>
  )
}

export default App
