import React from 'react'

const CountryLanguages = ({languages}) => {
  return (
    <div>
        <h3>Languages</h3>

        <ul>
            {
                Object
                    .values(languages)
                    .map(lang => 
                        <li key={lang}>{lang}</li>
                    )
            }
        </ul>
    </div>
  )
}

export default CountryLanguages