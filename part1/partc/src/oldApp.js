// const Hello = (props) => {
const Hello = ({name, age}) => {
  // can destructure the props here, or as above, can destructure directly in the parameters list
  // const { name, age } = props
  
  // can destructure the props object into name and age
  // const name = props.name
  // const age = props.age
  
  // single expression arrow function does not require curly braces
  const bornYear = () => new Date().getFullYear() - age
  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - props.age
  // }
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App