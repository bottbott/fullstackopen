import Note from './components/Note'

const App = ({notes}) => {
  // const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
          //<li key={note.id}>{note.content}</li>
        )}
      </ul>
    </div>
  )
}

export default App