import React, { useState } from 'react';
import './Counter.css'

export default function Counter() {
   const [counter, setCounter] = useState(0);
    // an input field where the user may enter the initial count and a reset button    
    // where they can return the count to it starting number
    //    user to set initial count
   const [initialCount, setInitialCount] = useState(0);    

    // modifies the initialCount state whenever the value of the input field changes
   const handleInitialCountChange = (e) => {
    setInitialCount(e.target.value);
   }

   const addValue = () => {
    // if (counter >= 20) {
    //       counter = 20
    //     } else {
    //       setCounter(counter + 1)
    //       console.log('add', counter);
    //     }
    setCounter(counter + 1)
   }

   const removeValue = () => {
    // if (counter <= 0) {
    //     counter = 0
    //   } else {
    //     setCounter(counter - 1)
    //     console.log('remove', counter);
    //   } 
    setCounter(counter - 1)
   }

    //    user to reset the count to the initial value
    const handleReset = () => {
        setCounter(initialCount);
    }
    
   return (
      <div className='counter-container'>
        <h1 className='heading'>chai aur react with Hitesh Sir</h1>
         <button
         className='buttons'
         onClick={addValue}>Increment</button>
         <button 
         className='buttons'
         onClick={removeValue}>Decrement</button>
         <button 
         className='buttons'
         onClick={handleReset}>Reset</button>
         <p className='result'>Count: {counter}</p>
      </div>
   );
}