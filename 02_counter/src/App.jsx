import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, incrementCounter] = useState(5);
  //let counter = 5;

  const addValue = () => {
    //console.log(counter += 1)
    if (counter < 20) {
      incrementCounter(counter + 1)

      // incrementCounter(counter + 1)
      // incrementCounter(counter + 1)
      // incrementCounter(counter + 1)
      // incrementCounter(counter + 1) // 6 

      // BUT 

      // incrementCounter(counterVal => counterVal + 1)
      // incrementCounter(counterVal => counterVal + 1)
      // incrementCounter(counterVal => counterVal + 1)
      // incrementCounter(counterVal => counterVal + 1) // 10

      // if this is copied to next lines, counter will be incremented only on time magar isko incrementCounter(counterVal => counterVal + 1) se kareinge to ye ik sath hi in crement hoke mile ga 

    } else {
      incrementCounter("Cannot increment the counter any further")
    }
  }

  const deleteValue = () => {
    if (counter > 0) {
      incrementCounter(counter - 1)
    } else {
      incrementCounter("Counter cannot decremented further")
    }
  }

  return (
    <>
      <h1>yippeee!!</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={deleteValue}
      >Remove value</button>
    </>
  )
}

export default App
