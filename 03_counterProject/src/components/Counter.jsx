import React, { useState } from 'react';
import './Counter.css'

export default function Counter({ heading }) {
   // an input field where the user may enter the initial count and a reset button    
   // where they can return the count to it starting number
   //    user to set initial count
   const [initialCount, setInitialCount] = useState(0);    

   const [counter, setCounter] = useState(initialCount);

    // modifies the initialCount state whenever the value of the input field changes
   const handleInitialCountChange = (e) => {
    setInitialCount(parseInt(e.target.value));
   }

   const incrementCounter = () => {
    setCounter(prevCount => prevCount < 20 ? prevCount + 1 : prevCount)
   }

   const decrementCounter = () => {
    setCounter(prevCount => prevCount > 0 ? prevCount - 1 : prevCount)
   }

    //    user to reset the count to the initial value
    const handleReset = () => {
        setCounter(initialCount);
    }
    
   return (
      <div className='counter-container'>
         {/* Dynamic heading */}
        <h1 className='heading'>{heading}</h1>
        {/* Input field for initial count */}
        {/* <input 
        type="number" 
        value={initialCount}
        onchange={handleInitialCountChange}
        /> */}
         <button
         className='buttons'
         onClick={incrementCounter}>Increment</button>
         <button 
         className='buttons'
         onClick={decrementCounter}>Decrement</button>
         <button 
         className='buttons'
         onClick={handleReset}>Reset</button>
         <p className='result'>Count: {counter}</p>
      </div>
   );
}