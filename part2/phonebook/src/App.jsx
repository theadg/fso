import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);

  }

  useEffect(()=> {
    const handleFilter = (filter) => {
      return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()) 
                        || person.number.includes(filter.toLowerCase()))
    }

    setFilteredPersons(handleFilter(filter));
  }, [filter, persons])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (!checkNameExists(personObject)){
      setPersons([...persons, personObject]);
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }

  }

  const checkNameExists = (newPerson) => {
    return persons.some((person) => person.name === newPerson.name);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange} 
      />
      <h3>Add a New</h3>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons 
        filteredPersons={filteredPersons}
      />
    </div>
  )
}

export default App