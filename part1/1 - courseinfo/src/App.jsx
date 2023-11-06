const Header = ({course}) => (
  <h1>{course}</h1>
)

const Content = ({ parts }) => (
  <>
    {parts.map(({part, exercises}) => (
        <Part 
            key={part}
            part={part}
            exercises={exercises}
        />
    ))}
  </>
)

const Part = ({part, exercises}) => (
  <div>{part} {exercises}</div>
)
  
const  Total = ({parts}) => {
  const total = () => 
      parts.reduce((acc, currentItem) => 
          acc + currentItem.exercises, 0
      );
  
  return (
      <div>Number of exercises is {total()}</div>
  )
}

function App() {
  const course = 'Half Stack application development';
  
  const parts = [
    {
      part: 'Fundamentals of react',
      exercises: 10
    },
    {
      part: 'Using Parts to Pass Data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    },
  ];

  return (
    <div>
        
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App