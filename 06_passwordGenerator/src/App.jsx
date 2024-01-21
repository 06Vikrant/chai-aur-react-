import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // update the length and it's default value is set to 8
  const [length, setLength] = useState(8)
  // for number we use the default value as true/false as whether the user want to include the number or not
  const [numberAllowed, setNumberAllowed] = useState(false)
  // same as the number variable
  const [charAllowed, setCharAllowed] = useState(false)
  // for the input field to get the random password
  const [password, setPassword] = useState("")

  // useRef hook
  // this is just a password reference
  // use of passwordRef: to provide user a optimized result
  // 1. check whether current object is there or not
  // 2. accessable/selectable
  const passwordRef = useRef(null) 

  // create a password generator method
  // goal is to optimize the password generation method
  const passwordGenerator = useCallback(() => {
    // generated password and we set it value to setPassword
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+=-{}[]`"

    for (let i = 0; i <= length; i++) {
      // creating a password
      // here we get the i.e, array index value  
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

    // setPassword is also set for optimisation as we use memoization in this process
    // but if we give password it will go in an infinite loop
  }, [length, numberAllowed, charAllowed, setPassword])

//Password generator method 
// goal is to run the password generator method
useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])

// copy to clipboard method
const copyPasswordToClipboard = useCallback(() => {
  //1. one way to copy password and show it to the user in a optimized way
  // ?. represents that select optionally as value can be null
  // to give the user a good UI feeling 
  passwordRef.current?.select();

  //--------------OR ---------------- //
  // can tell the range
  passwordRef.current?.setSelectionRange(0, 99);

  window.navigator.clipboard.writeText(password)
}, [password])

  return (
  <>
    <div className='bg-green-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500'>
      <h1 className='text-white text-center my-3 text-4xl'>Password Generator</h1>
      <div className='flex rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='w-full outline-none py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-4'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          value={length}
          min={6}
          max={100}
          onChange={(e) => {setLength(e.target.value)}}
          className='cursor-pointer'
          />
          <label htmlFor="inputRange">Range: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={numberAllowed}
           id='numberInput'
           onChange={() => {setNumberAllowed((prev) => !prev)}}
          />
          <label htmlFor="inputNumber">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={charAllowed}
           id='charInput'
           onChange={() => {setCharAllowed((prev) => !prev)}}
          />
          <label htmlFor="inputChar">Characters</label>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default App
