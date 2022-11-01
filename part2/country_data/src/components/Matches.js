const Matches = ({matches, limit}) => {
    
    const set_match_list = () => {
        if (matches.length === 1) {
            return (
                <div>
                    exact match. remove this text later.
                </div>
            )
        }
        if (matches.length > limit) {
            return (
                <p>Too many matches. Narrow your search.</p>
            )
        }
        else {
            return (
                <div>
                    {matches.map(match => <p key={match.cca3}>{match.name.official}</p>)}
                </div>
            )
        }
    }
    
    return (
        <div>
            {set_match_list()}
        </div>
    )
}

export default Matches