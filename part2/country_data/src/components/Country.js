const Country = ({country}) => {
    if (country !== '') {
        console.log('country is',country, typeof(country))
        return ( 
            <div>
            <h2>{country.name.official}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.keys(country.languages).map((keyname, i) => (
                    <li key={i}>{keyname}</li>
                ))}
            </ul>
            <p><img src={country.flags.png} alt={'flag for ' + country.name.official}></img></p>
        </div>
    )
}
}

export default Country