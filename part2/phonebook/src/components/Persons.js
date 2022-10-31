const Persons = ({persons, newSearch}) => {
    return (
        <div>
            {persons.filter((person) => person.name.toLowerCase().includes(newSearch)).map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default Persons