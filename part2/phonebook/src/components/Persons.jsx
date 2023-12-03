import React from 'react'

const Persons = ({ filteredPersons }) => {
  return (
    <>
    {filteredPersons.map(({ name, number }) => (
        <p key={name}>{name} {number}</p>
      )
    )}
    </>
  )
}

export default Persons