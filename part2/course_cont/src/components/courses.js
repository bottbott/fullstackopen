const Course = ({course: {id, name, parts}}) => {
    return (
      <div>
        <Header course={name} />
        <Content parts={parts} />
        <Total sum={parts.reduce((acc, part) => acc + part.exercises, 0)} />
      </div>
    )
  }
  
  const Header = ({ course }) => <h1>{course}</h1>
  
  const Total = ({ sum }) => <p><strong>total of {sum} exercises</strong></p>
  
  const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>
  
  const Content = ({ parts }) => 
    <>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </>

export default Course