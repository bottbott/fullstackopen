import { useState } from 'react'

const Button = ({label, action}) => {
  return (
    <button onClick={action}>{label}</button>
  )
}

const Display = () => {
  return (
    <div>
      henlo
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button label="good" action={setGood}/>
      <Button label="neutral" action={setNeutral}/>
      <Button label="bad" action={setBad}/>
      <h2>statistics</h2>
      <Display />

    </div>
  )
}

export default App