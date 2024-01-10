//this is a hook
import { useState } from 'react' 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  // createing a counter variable and setting its value to 15 
  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
    // console.log('clicked', Math.random());
    // counter = counter + 1
    // setCounter(counter)
    if (counter >= 20) {
      counter = 20
    } else {
      setCounter(counter + 1)
      console.log('add', counter);
    }

      /*-------------- OR -------------*/
    // counter = counter >= 20 ? 20 : counter
    // setCounter(counter + 1)

    /*-------------- OR -------------*/
    // counter = Math.min(20, Math.max(0, counter))
    // setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter <= 0) {
      counter = 0
    } else {
      setCounter(counter - 1)
      console.log('removed', counter)
    }

    // counter = counter <= 0 ? 0 : counter
    // setCounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value {counter} </button>
      <br />
      <button
      onClick={removeValue}>Remove value {counter} </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
