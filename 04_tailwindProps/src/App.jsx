import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let newObj = {
    name: 'Vikrant',
    age: 21
  }

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      <h1 className='bg-green-400 mb-4 text-white rounded-xl p-4'>Tailwind test</h1>
      <Card username='chaiaurreact' btnText='click me' myObj={newObj} myArr={newArr}/>
      <Card username='vikrant'/>
      {/* <Card username='vikrant' btnText='visit me'/> */}
    </>
  )
}

export default App
