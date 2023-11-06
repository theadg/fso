import { useEffect, useState } from "react";

const Header = ({course}) => (
  <h1>{course}</h1>
)

const Button = ({label, onClick}) => (
  <button onClick={onClick}>
    {label}
  </button>
)

const Statistics = ({
    good, 
    neutral, 
    bad, 
    all, 
    average, 
    positive
  }) => {

  const valueExists = good > 0 || neutral > 0 || bad > 0;

  if (!valueExists) {
    return (
      <p>No Feedback Given</p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine
          label="good"
          value={good}
        />
        <StatisticLine
          label="neutral"
          value={neutral}
        />
        <StatisticLine
          label="bad"
          value={bad}
        />
        <StatisticLine
          label="all"
          value={all}
        />
        <StatisticLine
          label="average"
          value={average}
        />
        <StatisticLine
          label="positive"
          value={`${positive}%`}
        />
      </tbody>
    </table>
  )
}

const StatisticLine = ({label, value}) => (
  <tr>
    <td> {label} </td>
    <td> {value} </td>
  </tr>
)


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  // Compute all whenever good, neutral, or bad changes
  useEffect(()=> {
    setAll(good + neutral + bad);
  }, [good, neutral, bad])

  // Compute average and positive whenever all changes
  useEffect(()=> {
    setAverage(
      (((good * 1) + (bad*(-1)))/
      all).toFixed(2) ?? 0
    )
    setPositive(
      ((good/all) * 100).toFixed(2) ?? 0
    )
  }, [all])


  return (
    <div>
      <Header course="give feedback" />
      <Button 
        label="good" 
        onClick={() => setGood(good + 1)}
      />
      <Button 
        label="neutral" 
        onClick={() => setNeutral(neutral + 1)}
      />
      <Button 
        label="bad" 
        onClick={() => setBad(bad + 1)}
      />

      <Header course="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />

    </div>
  )
}

export default App