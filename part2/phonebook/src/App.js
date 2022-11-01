import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const personsHook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(personsHook, [])

  const addName = (event) => {
    event.preventDefault()
    const name = {
      name: newName,
      number: newNumber
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    }
    else {
      setPersons(persons.concat(name))
    }
    setNewName('')
    setNewNumber('')

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewSearchChange = (event) => {
    setNewSearch(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleNewSearchChange}/>
      <h2>add a new</h2>
      <PersonForm onSubmit={addName} nameValue={newName} nameChange={handleNameChange} nameNumber={newNumber} numberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch}/>
    </div>
  )
}

export default App