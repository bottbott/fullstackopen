const PersonForm = ({ onSubmit, nameValue, nameChange, nameNumber, numberChange}) => {
    return (
        <form onSubmit={onSubmit}>
        <div>
          name: <input value={nameValue} onChange={nameChange}/>
        </div>
        <div>
          number: <input value={nameNumber} onChange={numberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm