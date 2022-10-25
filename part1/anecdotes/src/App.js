import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const Top = ({anecdote, votes}) => {
  return (
    <div>
      <h3>Anecdote with the most votes</h3>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
      
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const initial_votes = Array(anecdotes.length).fill(0)

  const max_vote_anecdote = anecdotes.indexOf(Math.max(...anecdotes))
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initial_votes)
  const [maxVote, setMaxVote] = useState(0)

  const random_quote = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
    return 
  }

  const vote = () => {
    let new_votes = [...votes]
    new_votes[selected]++
    setVotes(new_votes)
    // update the max vote
    const max_vote_anecdote = votes.indexOf(Math.max(...votes))
    setMaxVote(max_vote_anecdote)
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button onClick={vote} text="vote" />
      <Button onClick={random_quote} text="Next anecdote" />
      <Top anecdote={anecdotes[maxVote]} votes={votes[maxVote]} />
    </div>
  )
}

export default App