import Search from "./components/Search";
import Matches from "./components/Matches";
import Country from "./components/Country";
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [matches, setMatches] = useState([])
  const [country, setCountry] = useState('')

  const onChangeSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const matchesHook = () => {
    // do API call 
    if (searchTerm.length > 0) {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
          const filtered_countries = response.data.filter(country => country.name.official.toLowerCase().includes(searchTerm))
          setMatches(filtered_countries)

          if (filtered_countries.length === 1) {
            setCountry(filtered_countries[0])
          }
        })
    }

  
  }

  useEffect(matchesHook, [searchTerm])

  return (
    <div className="App">
      <Search value={searchTerm} onChange={onChangeSearch}/>
      <Matches matches={matches} limit={10} />
      <Country country={country} />
    </div>
  );
}

export default App;
