import React, { useState } from 'react'

const Button = ({label, onClick}) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
      <React.Fragment>
        <td>{text}</td><td>{value}</td>
      </React.Fragment>
  )
}

const Statistics = ({stats}) => {
  let [good, neutral, bad] = stats
  const all = good + neutral + bad
  const average = (good + bad > 0) ? (good - bad) / (good + bad) : 0
  const positive = good / all
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else {

    return (
      <div>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={all} />
          </tr>
          <tr>
            <StatisticLine text="average" value={average} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={positive} />
          </tr>
        </tbody>
      </table>
      
      
      
      
      
      
    </div>
  )
}
}

const Display = ({counter}) => {
  return (
    <div>
      <Statistics stats={counter}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByOneGood = () => {
    console.log(good)
    setGood(good + 1)
  }

  function increaseByOneNeutral() {
    console.log(neutral)
    setNeutral(neutral + 1)
  }

  function increaseByOneBad() {
    console.log(bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button label="good" onClick={increaseByOneGood}/>
      <Button label="neutral" onClick={increaseByOneNeutral}/>
      <Button label="bad" onClick={increaseByOneBad}/>
      <h2>statistics</h2>
      <Display counter={[good, neutral, bad]}/>

    </div>
  )
}

export default App